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


const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [
    AppComponent,
    UploaderComponent,
    CardComponent
  ],
  imports: [
    SwiperModule,
    CommonModule,
    BrowserModule,
    UcWidgetModule,
    AppRoutingModule,
    HttpClientModule,
    CloudinaryModule.forRoot({Cloudinary}, { cloud_name: 'your_cloud_name' } as CloudinaryConfiguration),
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
