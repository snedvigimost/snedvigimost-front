import {Component, OnInit} from '@angular/core';

import {ListingsService} from '../../rest/listings/listings.service';

import {ListingsDto} from '../../rest/listings/listings.dto';
import {PaginationDto} from '../../rest/pagination/pagination.dto';
import {PaginationParamsDto} from '../../rest/pagination/pagination.params.dto';

@Component({
  selector: 'app-listing-list',
  templateUrl: './listing-list.component.html',
  styleUrls: ['./listing-list.component.scss']
})
export class ListingListComponent implements OnInit {
  result: PaginationDto<ListingsDto>;
  paginationParamsDto = new PaginationParamsDto();

  constructor(private listingsService: ListingsService) {
    this.paginationParamsDto.is_published = true;
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
}
