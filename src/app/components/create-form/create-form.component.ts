import {Component, OnInit} from '@angular/core';
import {TranslocoService} from '@ngneat/transloco';

import {DistrictsService} from '../../rest/districts/districts.service';
import {PaginationDto} from '../../rest/pagination/pagination.dto';
import {DistrictDto} from '../../rest/districts/district.dto';
import {MicroDistrictsService} from '../../rest/micro-districts/districts.service';
import {MicroDistrictDto} from '../../rest/micro-districts/district.dto';
import {StreetsService} from '../../rest/streets/streets.service';
import {StreetDto} from '../../rest/streets/streets.dto';
import {LayoutService} from '../../rest/layout/layout.service';
import {LayoutDto} from '../../rest/layout/layout.dto';
import {ListingsService} from '../../rest/listings/listings.service';
import {HeatService} from '../../rest/heat/heat.service';
import {Heat} from '../../rest/heat/heat.dto';
import {ApartmentService} from '../../rest/condition/apartment.service';
import {Apartment} from '../../rest/condition/apartment.dto';
import {BathroomTypeDto} from '../../rest/bathroom-type/bathroom-type.dto';
import {BathroomTypeService} from '../../rest/bathroom-type/bathroom-type.service';


@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent implements OnInit {
  districts: PaginationDto<DistrictDto>;
  streets: PaginationDto<StreetDto>;
  layouts: PaginationDto<LayoutDto>;
  heating: PaginationDto<Heat>;
  apartments: PaginationDto<Apartment>;
  bathroomTypes: PaginationDto<BathroomTypeDto>;
  selectedDistrict: number;
  roomsCount: number;
  floor: number;
  price: number;
  floorInHouse: number;
  totalArea: number;
  livingArea: number;
  kitchenArea: number;
  selectedStreet: number;
  selectedLayoutId: number;
  selectedHeatingId: number;
  selectedApartmentId: number;
  selectedBathroomTypeId: number;
  selectedMicroDistrict: number;
  house: string;
  description: string;
  microDistricts: MicroDistrictDto[] = [];
  markerPositions: google.maps.LatLngLiteral[] = [];
  markerOptions: google.maps.MarkerOptions = {draggable: false};
  location: google.maps.LatLngLiteral = {
    lat: 50.437665,
    lng: 30.5205651
  };


  constructor(
    private districtsService: DistrictsService,
    private microDistrictsService: MicroDistrictsService,
    private streetsService: StreetsService,
    private layoutService: LayoutService,
    private listingsService: ListingsService,
    private heatService: HeatService,
    private apartmentService: ApartmentService,
    private bathroomTypeService: BathroomTypeService,
    public translocoService: TranslocoService,
  ) {
  }

  ngOnInit(): void {
    this.districtsService.getDistricts().subscribe(districts => {
      this.districts = districts;
    });
    this.streetsService.getStreets().subscribe(streets => {
      this.streets = streets;
    });
    this.layoutService.getLayouts().subscribe(layouts => {
      this.layouts = layouts;
    });
    this.heatService.getHeatingType().subscribe(heating => {
      this.heating = heating;
    });
    this.apartmentService.getApartmentCondition().subscribe(apartments => {
      this.apartments = apartments;
    });
    this.bathroomTypeService.getBathroomType().subscribe(bathroomTypes => {
      this.bathroomTypes = bathroomTypes;
    });
  }

  onDistrictChange() {
    console.log(this.selectedDistrict);
    this.microDistricts = this.districts.results.find(district => district.id === this.selectedDistrict).microDistricts;
    console.log(this.microDistricts);
    this.streetsService.getStreets({district: this.selectedDistrict}).subscribe(streets => {
      this.streets = streets;
    });
  }

  onSubmit() {
    this.listingsService.create({
      title: 'kek',
      is_published: true,
      totalArea: this.totalArea,
      livingArea: this.livingArea,
      kitchenArea: this.kitchenArea,
      floor: this.floor,
      floorInHouse: this.floorInHouse,
      roomsCount: this.roomsCount,
      price: this.price,
      description: this.description,
      district: this.selectedDistrict,
      microDistrict: this.selectedMicroDistrict,
      street: this.selectedStreet,
      layout: this.selectedLayoutId,
    }).subscribe(created => {
      console.log(created);
    });
  }

  addMarker(event: google.maps.MouseEvent) {
    this.markerPositions.push(event.latLng.toJSON());
  }

}
