import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import ru from '@angular/common/locales/ru';
import { FormsModule } from '@angular/forms';
import { CommonModule, registerLocaleData } from '@angular/common';

import { GoogleMapsModule } from '@angular/google-maps';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

// import {SwiperConfigInterface, SWIPER_CONFIG} from 'ngx-swiper-wrapper';
import player from 'lottie-web';

import { NzCascaderModule } from 'ng-zorro-antd/cascader';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { IconDefinition } from '@ant-design/icons-angular';
import {
  SortDescendingOutline,
  UserOutline,
  FacebookOutline,
  FacebookFill,
  GoogleCircleFill,
  CheckOutline,
  CalculatorOutline
} from '@ant-design/icons-angular/icons';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NZ_I18N, ru_RU } from 'ng-zorro-antd/i18n';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './rest/http.service';
import { UploaderComponent } from './components/uploader/uploader.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './page/about/about.component';
import { MapComponent } from './components/about/map/map.component';
import { LoaderComponent } from './components/_loader/loader.component';
import { CascaderFilterComponent } from './components/main/_cascader-filter/cascader-filter.component';
import { CreateFormComponent } from './components/create-form/create-form.component';
import { HttpClientJsonpModule } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material/expansion';

import { TranslocoRootModule } from './transloco/transloco-root.module';

import { TranslocoMessageFormatModule } from '@ngneat/transloco-messageformat';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

import { LoginComponent } from './page/login/login.component';
import { MatButtonModule } from '@angular/material/button';
import { FacebookModule } from "ngx-facebook";
import { InstallmentCalculatorComponent } from './components/listing-item/installment-calculator/installment-calculator.component';


registerLocaleData(ru);


// Note we need a separate function as it's required
// by the AOT compiler.
export function playerFactory() {
  return player;
}


const icons: IconDefinition[] = [
  SortDescendingOutline,
  UserOutline,
  FacebookOutline,
  FacebookFill,
  GoogleCircleFill,
  CheckOutline,
  CalculatorOutline
];


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
    LoginComponent,
  ],
  imports: [
    FormsModule,
    NzTabsModule,
    CommonModule,
    BrowserModule,
    NzSelectModule,
    NzIconModule.forRoot(icons),
    MatIconModule,
    AppRoutingModule,
    NzDropDownModule,
    GoogleMapsModule,
    MatButtonModule,
    FacebookModule.forRoot(),
    MatIconModule,
    MatInputModule,
    HttpClientModule,
    MatExpansionModule,
    NzInputNumberModule,
    BrowserAnimationsModule,
    NzCascaderModule,
    TranslocoMessageFormatModule.init(),
    TranslocoRootModule
  ],
  providers: [
    HttpService,
    HttpClientModule,
    HttpClientJsonpModule,
    // {
    //   provide: SWIPER_CONFIG,
    //   useValue: DEFAULT_SWIPER_CONFIG
    // },
    {
      provide: NZ_I18N,
      useValue: ru_RU
    }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
