import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { GoogleMapsModule } from '@angular/google-maps';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import * as OverlayscrollbarsModule from 'overlayscrollbars-ngx';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';

import { GalleryModule } from '@ngx-gallery/core';
import { GallerizeModule } from '@ngx-gallery/gallerize';
import { LightboxModule } from '@ngx-gallery/lightbox';

import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';

import { TranslocoRootModule } from '../../transloco/transloco-root.module';
import { WebSpeechComponentComponent } from '../../components/main/web-speech-component/web-speech-component.component';
import { CardModule } from '../../components/main/card/card.module';
import { ListingListComponent } from './listing-list/listing-list.component';
import { MainRoutingModule } from './main-routing.module';
import { ListingItemComponent } from '../../components/listing-item/listing-item.component';
import { ListingsMapComponent } from '../../components/main/listings-map/listings-map.component';
import { ChartStatComponent } from '../../components/listing-item/chart/chart.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import {
  CheckOutline,
  FacebookFill,
  FacebookOutline,
  GoogleCircleFill,
  SortDescendingOutline,
  UserOutline
} from '@ant-design/icons-angular/icons';
import { CreateFormComponent } from "../../components/create-form/create-form.component";
import { NzDividerModule } from "ng-zorro-antd/divider";
import { NzModalModule } from 'ng-zorro-antd/modal';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { InstallmentCalculatorComponent } from '../../components/listing-item/installment-calculator/installment-calculator.component';
import { PaybackCalculatorComponent } from '../../components/listing-item/payback-calculator/payback-calculator.component';
import { NgxMaskModule } from 'ngx-mask/lib/ngx-mask.module';
import { IMaskModule } from 'angular-imask';
import { CurrencyMaskInputMode, NgxCurrencyModule } from 'ngx-currency';


const icons: IconDefinition[] = [
  SortDescendingOutline,
  UserOutline,
  FacebookOutline,
  FacebookFill,
  GoogleCircleFill,
  CheckOutline
];

export const customCurrencyMaskConfig = {
  align: "right",
  allowNegative: true,
  allowZero: true,
  decimal: ",",
  precision: 0,
  prefix: "",
  suffix: " грн",
  thousands: " ",
  nullable: true,
  min: null,
  max: null,
  inputMode: CurrencyMaskInputMode.FINANCIAL
};

@NgModule({
  declarations: [
    ListingItemComponent,
    ListingListComponent,
    ListingsMapComponent,
    ChartStatComponent,
    InstallmentCalculatorComponent,
    PaybackCalculatorComponent,
    CreateFormComponent,
    WebSpeechComponentComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatIconModule,
    // NgxMaskModule.forRoot(),
    IMaskModule,
    NgxCurrencyModule.forRoot(customCurrencyMaskConfig),
    NzIconModule,
    ShareButtonsModule,
    ShareIconsModule,
    ScrollingModule,
    NzModalModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    NgxSliderModule,
    GoogleMapsModule,
    NzSpinModule,
    NzDividerModule,
    NzIconModule.forRoot(icons),
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


