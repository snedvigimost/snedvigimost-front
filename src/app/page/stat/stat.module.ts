import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StatComponent} from './stat.component';
import {StatRoutingModule} from './stat-routing.module';
import {ChartComponent} from '../../components/stat/chart/chart.component';
import {BoxComponent} from '../../components/stat/box/box.component';
import {PriceStatComponent} from '../../components/stat/price-stat/price-stat.component';
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    StatComponent,
    BoxComponent,
    ChartComponent,
    PriceStatComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    StatRoutingModule,
  ],
})
export class StatModule {
}
