import { Component, OnInit } from '@angular/core';

import { ListingsDto } from '../../rest/listings/listings.dto';
import { ListingsService } from '../../rest/listings/listings.service';
import {PaginationParamsDto} from '../../rest/pagination/pagination.params.dto';

@Component({
  selector: 'app-listing-list',
  templateUrl: './listing-list.component.html',
  styleUrls: ['./listing-list.component.scss']
})
export class ListingListComponent implements OnInit {
  listings: ListingsDto[];
  page = 1;
  paginationParamsDto = new PaginationParamsDto();

  constructor(private listingsService: ListingsService) {
    this.paginationParamsDto.is_published = true;
  }

  ngOnInit(): void {
    this.listingsService.getListings(this.paginationParamsDto).subscribe(listings => {
      this.listings = listings.results;
    });
  }
}
