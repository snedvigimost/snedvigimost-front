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
import {ListingListComponent} from './components/listing-list/listing-list.component';
import {UploaderComponent} from './components/uploader/uploader.component';
import {CardComponent} from './components/card/card.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {AboutComponent} from './components/about/about.component';
import {MapComponent} from './components/map/map.component';
import {DatabaseComponent} from './components/database/database.component';
import {DialogComponent} from './components/database/dialog/dialog.component';
import {LoaderComponent} from './components/loader/loader.component';
import {SpinnerComponent} from './components/spinner/spinner.component';
import {CascaderFilterComponent} from './components/cascader-filter/cascader-filter.component';
import {GalleryModule} from '@ngx-gallery/core';
import {LightboxModule} from '@ngx-gallery/lightbox';
import {GallerizeModule} from '@ngx-gallery/gallerize';
import {CreateFormComponent} from './components/create-form/create-form.component';

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
    CardComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    DatabaseComponent,
    UploaderComponent,
    ListingListComponent,
    CascaderFilterComponent,
    DialogComponent,
    LoaderComponent,
    SpinnerComponent,
    CreateFormComponent
  ],
  imports: [
    FormsModule,
    SwiperModule,
    AgGridModule.withComponents([]),
    CommonModule,
    BrowserModule,
    MatIconModule,
    UcWidgetModule,
    MatDialogModule,
    MatButtonModule,
    NzSelectModule,
    NzIconModule.forRoot(icons),
    NzSliderModule,
    GalleryModule,
    LightboxModule,
    NzRadioModule,
    NzButtonModule,
    NzInputModule,
    GallerizeModule,
    AppRoutingModule,
    NzCascaderModule,
    GoogleMapsModule,
    MatInputModule,
    HttpClientModule,
    NzPaginationModule,
    NzInputNumberModule,
    NgxPaginationModule,
    MatButtonToggleModule,
    BrowserAnimationsModule,
    LottieModule.forRoot({player: playerFactory})
  ],
  providers: [
    HttpService,
    HttpClientModule,
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
