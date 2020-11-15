import {Component, OnInit} from '@angular/core';
import {MatButtonToggleChange} from '@angular/material/button-toggle';

import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {convert} from 'cashify';
import {debounceTime, distinctUntilChanged, map, switchMap} from 'rxjs/operators';

import {RateService} from '../../rest/rates/rate.service';
import {ListingsService} from '../../rest/listings/listings.service';

import {ListingsDto} from '../../rest/listings/listings.dto';
import {PaginationDto} from '../../rest/pagination/pagination.dto';
import {PaginationParamsDto} from '../../rest/pagination/pagination.params.dto';

import {CurrencyEnum} from '../../rest/rates/currency.enum';
import {Rate} from '../../rest/rates/rate';
import {StreetsService} from '../../rest/streets/streets.service';
import {DistrictsService} from '../../rest/districts/districts.service';
import {DistrictDto} from '../../rest/districts/district.dto';
import {sortOptions} from './sotring';
import {NlpSearchService} from '../../rest/nlp-search/nlp-search.service';


@Component({
  selector: 'app-listing-list',
  templateUrl: './listing-list.component.html',
  styleUrls: ['./listing-list.component.scss']
})
export class ListingListComponent implements OnInit {
  result: PaginationDto<ListingsDto>;
  paginationParamsDto = new PaginationParamsDto();
  currencyEnum = CurrencyEnum;
  sortOptions = sortOptions;

  defaultPrices: Record<CurrencyEnum, [number, number]> = {
    UAH: [0, 0],
    USD: [1000, 30000],
    EUR: [0, 0]
  };

  rates: Rate = {
    UAH: 28,
    USD: 1,
    EUR: 0.85
  };

  // TODO: create separate component for filters
  priceRange = this.defaultPrices.USD;

  selectedRoomCount: string[];
  selectedCurrency = this.currencyEnum.USD;
  previousSelectedCurrency = this.currencyEnum.USD;

  selectedPrice: [number, number] = this.priceRange;
  selectedPriceChanged = new Subject<[number, number]>();

  selectedArea: [number, number] = [0, 100];
  areaRange: [number, number] = [0, 100];
  selectedAreaChanged = new Subject<[number, number]>();


  searchChange$ = new BehaviorSubject('');
  districtList: DistrictDto[] = [];
  districtIsLoading = false;

  message = '';

  onDistrictSearch(value: string): void {
    this.districtIsLoading = true;
    this.searchChange$.next(value);
  }

  constructor(
    private rateService: RateService,
    private streetsService: StreetsService,
    private listingsService: ListingsService,
    private nlpSearchService: NlpSearchService,
    private districtsService: DistrictsService,
  ) {
    this.paginationParamsDto.is_published = true;
    this.selectedPriceChanged.pipe(
      debounceTime(800),
      distinctUntilChanged())
      .subscribe(() => {
        this.getListings();
      });
    this.selectedAreaChanged.pipe(
      debounceTime(800),
      distinctUntilChanged())
      .subscribe(() => {
        this.getListings();
      });
  }

  ngOnInit(): void {
    this.getListings();
    this.rateService.getRate().subscribe(rates => {
      for (const rate of rates) {
        if (rate.ccy === this.currencyEnum.USD) {
          this.rates.UAH = Number(rate.buy);
        }
        if (rate.ccy === this.currencyEnum.EUR) {
          this.rates.EUR = Number(rate.buy);
        }
      }

      this.defaultPrices.UAH = [this.defaultPrices.USD[0] * this.rates.UAH, this.defaultPrices.USD[1] * this.rates.UAH];
      this.defaultPrices.EUR = [this.defaultPrices.UAH[0] / this.rates.EUR, this.defaultPrices.UAH[1] / this.rates.EUR];

      this.rates.EUR = Number((this.rates.UAH / this.rates.EUR).toFixed(2));
    });

    const getDistrictList = (name: string) =>
      this.districtsService.getDistricts()
        .pipe(map((res: PaginationDto<DistrictDto>) => res.results));

    const optionList$: Observable<DistrictDto[]> = this.searchChange$
      .asObservable()
      .pipe(debounceTime(500))
      .pipe(switchMap(getDistrictList));
    optionList$.subscribe(data => {
      this.districtList = data;
      this.districtIsLoading = false;
    });
  }

  getListings() {
    const convertConfig = {
      from: this.selectedCurrency,
      to: this.currencyEnum.USD,
      base: this.currencyEnum.USD,
      rates: this.rates
    };
    this.paginationParamsDto.min_price = Math.floor(convert(this.selectedPrice[0], convertConfig));
    this.paginationParamsDto.max_price = Math.floor(convert(this.selectedPrice[1], convertConfig));

    this.paginationParamsDto.min_area = this.selectedArea[0];
    this.paginationParamsDto.max_area = this.selectedArea[1];

    this.listingsService.getListings(this.paginationParamsDto).subscribe(listings => this.result = listings);
  }

  onPageChange($event: number) {
    this.paginationParamsDto.page = $event;
    this.getListings();
  }

  onRoomCountChange($event: string[]) {
    this.selectedRoomCount = $event;
    this.paginationParamsDto.rooms_count = $event.join(',');
    this.getListings();
  }

  onPriceChange($event: [number, number]) {
    this.selectedPrice = $event;
    this.selectedPriceChanged.next($event);
  }


  // TODO: properly handle it
  // [javascript - ngModel cannot detect array changes correctly - Stack Overflow]
  // (https://stackoverflow.com/questions/44476677/ngmodel-cannot-detect-array-changes-correctly)
  onPriceInputChange() {
    this.selectedPrice = [...this.selectedPrice];
    this.selectedPriceChanged.next(this.selectedPrice);
  }

  onCurrencyChange($event: any) {
    this.previousSelectedCurrency = this.selectedCurrency;
    this.selectedCurrency = $event;

    const convertConfig = {
      from: this.previousSelectedCurrency,
      to: this.selectedCurrency,
      base: this.currencyEnum.USD,
      rates: this.rates
    };
    // TODO: assign to index doesn't work with buggy
    this.selectedPrice = [
      Math.floor(convert(this.selectedPrice[0], convertConfig)),
      Math.floor(convert(this.selectedPrice[1], convertConfig))
    ];

    this.priceRange = this.defaultPrices[$event];
  }


  onAreaChange($event: [number, number]) {
    this.selectedArea = $event;
    this.selectedAreaChanged.next($event);
  }

  onAreaInputChange() {
    this.selectedArea = [...this.selectedArea];
    this.selectedAreaChanged.next(this.selectedArea);
  }

  onSortChange() {
    this.getListings();
  }

  onDistrictChange($event?) {
    this.getListings();
  }

  onFinalContent($event: string) {
    console.log($event);
    const result = this.nlpSearchService.matchSearchString($event, this.districtList);
    console.log(result);
    if (result.roomCount) {
      this.selectedRoomCount = [String(result.roomCount)];
      this.paginationParamsDto.rooms_count = [String(result.roomCount)].join(',');
    }
    if (result.districtID) {
      this.paginationParamsDto.district = result.districtID;
    }
    this.getListings();
  }
}
