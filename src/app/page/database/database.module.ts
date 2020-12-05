import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {CardComponent} from '../../components/main/card/card.component';
import {ListingsMapComponent} from '../../components/main/listings-map/listings-map.component';
import {GoogleMapsModule} from '@angular/google-maps';
import {NzSpinModule} from 'ng-zorro-antd/spin';
import * as OverlayscrollbarsModule from 'overlayscrollbars-ngx';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {GalleryModule} from '@ngx-gallery/core';
import {GallerizeModule} from '@ngx-gallery/gallerize';
import {LightboxModule} from '@ngx-gallery/lightbox';
import {ListingItemComponent} from '../../components/listing-item/listing-item.component';
import {FormsModule} from '@angular/forms';
import {SwiperModule} from 'ngx-swiper-wrapper';
import {AgGridModule} from 'ag-grid-angular';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzSliderModule} from 'ng-zorro-antd/slider';
import {NzRadioModule} from 'ng-zorro-antd/radio';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzCascaderModule} from 'ng-zorro-antd/cascader';
import {MatInputModule} from '@angular/material/input';
import {HttpClientModule} from '@angular/common/http';
import {MatExpansionModule} from '@angular/material/expansion';
import {NzPaginationModule} from 'ng-zorro-antd/pagination';
import {NzInputNumberModule} from 'ng-zorro-antd/input-number';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LottieModule} from 'ngx-lottie';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {TranslocoRootModule} from '../../transloco/transloco-root.module';
import {playerFactory} from '../../app.module';
import {IconDefinition} from '@ant-design/icons-angular';
import {SortDescendingOutline} from '@ant-design/icons-angular/icons';
import {WebSpeechComponentComponent} from '../../components/main/web-speech-component/web-speech-component.component';
import {DatabaseRoutingModule} from './database-routing.module';
import {DatabaseComponent} from './database.component';
import {CardModule} from '../../components/main/card/card.module';
import {DialogComponent} from '../../components/database/dialog/dialog.component';
import {SpinnerComponent} from '../../components/_spinner/spinner.component';


const icons: IconDefinition[] = [SortDescendingOutline];

@NgModule({
  declarations: [
    DatabaseComponent,
    DialogComponent,
    SpinnerComponent,
  ],
  imports: [
    CommonModule,
    DatabaseRoutingModule,
    CardModule,
    MatIconModule,
    GoogleMapsModule,
    NzSpinModule,
    LightboxModule,
    GalleryModule,
    GallerizeModule,
    NzSelectModule,
    OverlayscrollbarsModule.OverlayscrollbarsModule,
    FormsModule,
    SwiperModule,
    AgGridModule.withComponents([]),
    CommonModule,
    MatDialogModule,
    NzSelectModule,
    MatButtonModule,
    // NzIconModule.forRoot(icons),
    NzSliderModule,
    NzRadioModule,
    NzButtonModule,
    NzInputModule,
    NzCascaderModule,
    GoogleMapsModule,
    MatInputModule,
    MatExpansionModule,
    NzPaginationModule,
    NzInputNumberModule,
    MatButtonToggleModule,
    LottieModule.forRoot({player: playerFactory}),
    MatCardModule,
    MatSelectModule,
    TranslocoRootModule
  ]
})
export class DatabaseModule {
}


