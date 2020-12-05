import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import ru from '@angular/common/locales/ru';
import {FormsModule} from '@angular/forms';
import {CommonModule, registerLocaleData} from '@angular/common';

import {GoogleMapsModule} from '@angular/google-maps';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import {SwiperConfigInterface, SwiperModule, SWIPER_CONFIG} from 'ngx-swiper-wrapper';
import {UcWidgetModule} from 'ngx-uploadcare-widget';
import {NgxPaginationModule} from 'ngx-pagination';
import {AgGridModule} from 'ag-grid-angular';

import {LottieModule} from 'ngx-lottie';
import player from 'lottie-web';

import {NzCascaderModule} from 'ng-zorro-antd/cascader';
import {NzRadioModule} from 'ng-zorro-antd/radio';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {IconDefinition} from '@ant-design/icons-angular';
import {SortDescendingOutline} from '@ant-design/icons-angular/icons';
import {NzSliderModule} from 'ng-zorro-antd/slider';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzPaginationModule} from 'ng-zorro-antd/pagination';
import {NzInputNumberModule} from 'ng-zorro-antd/input-number';
import {NZ_I18N, ru_RU} from 'ng-zorro-antd/i18n';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpService} from './rest/http.service';
import {UploaderComponent} from './components/uploader/uploader.component';
import {CardComponent} from './components/main/card/card.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {AboutComponent} from './page/about/about.component';
import {MapComponent} from './components/about/map/map.component';
import {DatabaseComponent} from './page/database/database.component';
import {DialogComponent} from './components/database/dialog/dialog.component';
import {LoaderComponent} from './components/_loader/loader.component';
import {SpinnerComponent} from './components/_spinner/spinner.component';
import {CascaderFilterComponent} from './components/main/_cascader-filter/cascader-filter.component';
import {GalleryModule} from '@ngx-gallery/core';
import {LightboxModule} from '@ngx-gallery/lightbox';
import {GallerizeModule} from '@ngx-gallery/gallerize';
import {CreateFormComponent} from './components/create-form/create-form.component';
import {ListingItemComponent} from './components/listing-item/listing-item.component';
import {WebSpeechComponentComponent} from './components/main/web-speech-component/web-speech-component.component';
import {HttpClientJsonpModule} from '@angular/common/http';
import {ListingsMapComponent} from './components/main/listings-map/listings-map.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {NzSpinModule} from 'ng-zorro-antd/spin';
// @ts-ignore

import {ChartComponent} from './components/stat/chart/chart.component';
import {BoxComponent} from './components/stat/box/box.component';
import {PriceStatComponent} from './components/stat/price-stat/price-stat.component';
import {StatComponent} from './page/stat/stat.component';
import {TranslocoRootModule} from './transloco/transloco-root.module';
import {StatModule} from "./page/stat/stat.module";
// let OverlayscrollbarsModule = require("overlayscrollbars-ngx");

registerLocaleData(ru);


// Note we need a separate function as it's required
// by the AOT compiler.
export function playerFactory() {
  return player;
}


const icons: IconDefinition[] = [SortDescendingOutline];

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    UploaderComponent,
    CascaderFilterComponent,
    LoaderComponent,
    CreateFormComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule,
    NzSelectModule,
    NzIconModule.forRoot(icons),
    MatIconModule,
    AppRoutingModule,
    GoogleMapsModule,
    MatInputModule,
    HttpClientModule,
    MatExpansionModule,
    NzInputNumberModule,
    BrowserAnimationsModule,
    NzCascaderModule,
    TranslocoRootModule
  ],
  providers: [
    HttpService,
    HttpClientModule,
    HttpClientJsonpModule,
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    },
    {
      provide: NZ_I18N,
      useValue: ru_RU
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
