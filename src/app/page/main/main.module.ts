import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {MatIconModule} from '@angular/material/icon';
import {GoogleMapsModule} from '@angular/google-maps';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import * as OverlayscrollbarsModule from 'overlayscrollbars-ngx';
import {NzSelectModule} from 'ng-zorro-antd/select';

import {GalleryModule} from '@ngx-gallery/core';
import {GallerizeModule} from '@ngx-gallery/gallerize';
import {LightboxModule} from '@ngx-gallery/lightbox';

import {NzSpinModule} from 'ng-zorro-antd/spin';
import {NzSliderModule} from 'ng-zorro-antd/slider';
import {NzRadioModule} from 'ng-zorro-antd/radio';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzPaginationModule} from 'ng-zorro-antd/pagination';
import {NzInputNumberModule} from 'ng-zorro-antd/input-number';

import {TranslocoRootModule} from '../../transloco/transloco-root.module';
import {WebSpeechComponentComponent} from '../../components/main/web-speech-component/web-speech-component.component';
import {CardModule} from '../../components/main/card/card.module';
import {ListingListComponent} from './listing-list/listing-list.component';
import {MainRoutingModule} from './main-routing.module';
import {ListingItemComponent} from '../../components/listing-item/listing-item.component';
import {ListingsMapComponent} from '../../components/main/listings-map/listings-map.component';


@NgModule({
  declarations: [
    ListingItemComponent,
    ListingListComponent,
    ListingsMapComponent,
    WebSpeechComponentComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatIconModule,
    ScrollingModule,
    GoogleMapsModule,
    NzSpinModule,
    LightboxModule,
    GalleryModule,
    GallerizeModule,
    NzSelectModule,
    OverlayscrollbarsModule.OverlayscrollbarsModule,
    FormsModule,
    CommonModule,
    CardModule,
    NzSelectModule,
    MatButtonModule,
    NzSliderModule,
    NzRadioModule,
    NzButtonModule,
    NzInputModule,
    MatExpansionModule,
    NzPaginationModule,
    NzInputNumberModule,
    MatButtonToggleModule,
    MatCardModule,
    TranslocoRootModule
  ]
})
export class MainModule {
}


