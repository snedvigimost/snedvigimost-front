import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ListingsService} from '../../rest/listings/listings.service';
import {ListingsDto} from '../../rest/listings/listings.dto';
import {GalleryItem} from '@ngx-gallery/core/lib/models/gallery.model';
import {ImageItem, ImageSize} from '@ngx-gallery/core';
import * as Dinero from 'dinero.js/build/amd/dinero';

@Component({
  selector: 'app-listing-item',
  templateUrl: './listing-item.component.html',
  styleUrls: ['./listing-item.component.scss']
})
export class ListingItemComponent implements OnInit {
 dinero = Dinero;
  listing: ListingsDto;
  contain = ImageSize.Cover;
  cameraImages: GalleryItem[] = [];

  constructor(
    private route: ActivatedRoute,
    private listingsService: ListingsService,
  ) {
  }

  ngOnInit(): void {
    const listingId = this.route.snapshot.paramMap.get('id');
    this.listingsService.getById(listingId).subscribe(listing => {
      console.log(listing);
      this.listing = listing;
      this.cameraImages = [...this.listing.images.map(image => new ImageItem({src: image.photo}))];
    });
  }

   get price() {
    return this.dinero({amount: this.listing.price, precision: 0}).setLocale('ru-RU').toFormat('$0,0');
  }

}
