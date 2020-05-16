import {Component, OnInit} from '@angular/core';

import {ListingsDto} from './rest/listings/listings.dto';
import {ListingsService} from './rest/listings/listings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  listings: ListingsDto[];

  constructor(private listingsService: ListingsService) {}

  ngOnInit(): void {
    this.listingsService.getListings().subscribe(listings => {
      this.listings = listings.results;
    });
  }

}
