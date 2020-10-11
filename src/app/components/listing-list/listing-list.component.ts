import {Component, OnInit} from '@angular/core';

import {MatButtonToggleChange} from '@angular/material/button-toggle';

import {ListingsService} from '../../rest/listings/listings.service';

import {ListingsDto} from '../../rest/listings/listings.dto';
import {PaginationDto} from '../../rest/pagination/pagination.dto';
import {PaginationParamsDto} from '../../rest/pagination/pagination.params.dto';
import {Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'app-listing-list',
  templateUrl: './listing-list.component.html',
  styleUrls: ['./listing-list.component.scss']
})
export class ListingListComponent implements OnInit {
  result: PaginationDto<ListingsDto>;
  paginationParamsDto = new PaginationParamsDto();

  defaultMinPrice = 1000;
  defaultMaxPrice = 30000;
  selectedPrice: [number, number] = [this.defaultMinPrice, this.defaultMaxPrice];
  selectedPriceChanged = new Subject<[number, number]>();

  constructor(private listingsService: ListingsService) {
    this.paginationParamsDto.is_published = true;
    this.selectedPriceChanged.pipe(
      debounceTime(800),
      distinctUntilChanged())
      .subscribe(price => {
        [this.paginationParamsDto.min_price, this.paginationParamsDto.max_price] = price;
        this.selectedPrice = price;
        this.getListings();
      });
  }

  ngOnInit(): void {
    this.getListings();
  }

  getListings() {
    this.listingsService.getListings(this.paginationParamsDto).subscribe(listings => this.result = listings);
  }

  onPageChange($event: number) {
    this.paginationParamsDto.page = $event;
    this.getListings();
  }

  onRoomCountChange($event: MatButtonToggleChange) {
    this.paginationParamsDto.rooms_count = $event.value.join(',');
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
}
