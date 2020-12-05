import {Component, Input, OnInit} from '@angular/core';

import * as Dinero from 'dinero.js/build/amd/dinero.js';
import {GalleryItem} from '@ngx-gallery/core/lib/models/gallery.model';
import {ImageItem, ImageSize} from '@ngx-gallery/core';

import {ListingsDto} from '../../../rest/listings/listings.dto';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() listing: ListingsDto;
  dinero = Dinero;
  index = 0;
  contain = ImageSize.Cover;
  cameraImages: GalleryItem[] = [];

  ngOnInit(): void {
    this.cameraImages = [...this.listing.images.map(image => new ImageItem({src: image.photo}))];
  }

  get price() {
    return this.dinero({amount: this.listing.price, precision: 0}).setLocale('ru-RU').toFormat('0,0');
  }

}
