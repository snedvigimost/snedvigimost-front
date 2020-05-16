import {Component, Input} from '@angular/core';

import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import * as Dinero from 'dinero.js/build/amd/dinero.js';

import {ListingsDto} from '../../rest/listings/listings.dto';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() listing: ListingsDto;
  dinero = Dinero;

  public config: SwiperConfigInterface = {
    a11y: true,
    direction: 'horizontal',
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: true,
    pagination: false
  };

  get price() {
    return this.dinero({amount: this.listing.price, precision: 0}).setLocale('ru-RU').toFormat('$0,0')
  }

}
