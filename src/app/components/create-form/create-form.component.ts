import {Component, OnInit} from '@angular/core';

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

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent implements OnInit {
  districts: PaginationDto<DistrictDto>;
  streets: PaginationDto<StreetDto>;
  layouts: PaginationDto<LayoutDto>;
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
  selectedMicroDistrict: number;
  house: string;
  description: string;
  microDistricts: MicroDistrictDto[] = [];


  constructor(
    private districtsService: DistrictsService,
    private microDistrictsService: MicroDistrictsService,
    private streetsService: StreetsService,
    private layoutService: LayoutService,
    private listingsService: ListingsService,
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
}
