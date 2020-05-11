import {Component, OnInit} from '@angular/core';
import {SwiperConfigInterface} from 'ngx-swiper-wrapper';

import {ListingsDto} from './rest/listings/listings.dto';
import {ListingsService} from './rest/listings/listings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'real-estate';
  listings: ListingsDto[];

  public config: SwiperConfigInterface = {
    a11y: true,
    direction: 'horizontal',
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: true,
    pagination: false
  };

  constructor(private listingsService: ListingsService) {}

  ngOnInit(): void {
    this.listingsService.getListings().subscribe(listings => {
      this.listings = listings.results;
      console.log(listings);
    });
  }

}
