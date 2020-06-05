import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import {HttpService} from './rest/http.service';
import {CommonModule} from '@angular/common';
import { UcWidgetModule } from 'ngx-uploadcare-widget';
import { UploaderComponent } from './components/uploader/uploader.component';
import { CardComponent } from './components/card/card.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { ListingListComponent } from './components/listing-list/listing-list.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { NzCascaderModule } from 'ng-zorro-antd/cascader';
import {GoogleMapsModule} from '@angular/google-maps';
import { MapComponent } from './components/map/map.component';
import { registerLocaleData } from '@angular/common';
import ru from '@angular/common/locales/ru';
registerLocaleData(ru);
import { NZ_I18N, ru_RU } from 'ng-zorro-antd/i18n';
import {FormsModule} from '@angular/forms';
import { CascaderFilterComponent } from './components/cascader-filter/cascader-filter.component';
import {AgGridModule} from 'ag-grid-angular';
import { DatabaseComponent } from './components/database/database.component';
import { DialogComponent } from './components/database/dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


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
    DialogComponent
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
    AppRoutingModule,
    NzCascaderModule,
    GoogleMapsModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule
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
export class AppModule { }
