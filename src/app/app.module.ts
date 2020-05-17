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
import { CloudinaryModule, CloudinaryConfiguration } from '@cloudinary/angular-5.x';
import { Cloudinary } from 'cloudinary-core';
import { UcWidgetModule } from 'ngx-uploadcare-widget';
import { UploaderComponent } from './components/uploader/uploader.component';
import { CardComponent } from './components/card/card.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { ListingListComponent } from './components/listing-list/listing-list.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import {GoogleMapsModule} from '@angular/google-maps';
import { MapComponent } from './components/map/map.component';


const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [
    AppComponent,
    UploaderComponent,
    CardComponent,
    ListingListComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    MapComponent
  ],
  imports: [
    SwiperModule,
    CommonModule,
    BrowserModule,
    UcWidgetModule,
    AppRoutingModule,
    GoogleMapsModule,
    HttpClientModule,
    CloudinaryModule.forRoot({Cloudinary}, { cloud_name: 'your_cloud_name' } as CloudinaryConfiguration),
    NgxPaginationModule,
    BrowserAnimationsModule
  ],
  providers: [
    HttpService,
    HttpClientModule,
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
