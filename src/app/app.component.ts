import {Component, OnInit} from '@angular/core';
import {ListingsService} from './rest/listings/listings.service';
import {ListingsDto} from './rest/listings/listings.dto';
import {PaginationDto} from './rest/pagination/pagination.dto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'real-estate';

  constructor(private listingsService: ListingsService) {}

  ngOnInit(): void {
    this.listingsService.getListings().subscribe(listings => {
      const kek = new PaginationDto<ListingsDto>(listings);
      console.log(kek);
      console.log(listings);
    });
  }

}
