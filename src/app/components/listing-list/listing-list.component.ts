import { Component, OnInit } from '@angular/core';

import { ListingsDto } from '../../rest/listings/listings.dto';
import { ListingsService } from '../../rest/listings/listings.service';

@Component({
  selector: 'app-listing-list',
  templateUrl: './listing-list.component.html',
  styleUrls: ['./listing-list.component.scss']
})
export class ListingListComponent implements OnInit {
  listings: ListingsDto[];
  page = 1;

  constructor(private listingsService: ListingsService) { }

  ngOnInit(): void {
    this.listingsService.getListings().subscribe(listings => {
      this.listings = listings.results;
    });
  }
}
