import {Component, Input} from '@angular/core';

import {SwiperConfigInterface} from 'ngx-swiper-wrapper';

import {ListingsDto} from '../../rest/listings/listings.dto';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() listing: ListingsDto;

  public config: SwiperConfigInterface = {
    a11y: true,
    direction: 'horizontal',
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: true,
    pagination: false
  };

}
