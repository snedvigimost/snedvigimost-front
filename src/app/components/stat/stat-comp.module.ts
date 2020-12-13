import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import {BoxComponent} from './box/box.component';
import {ChartComponent} from './chart/chart.component';
import {PriceStatComponent} from './price-stat/price-stat.component';


@NgModule({
  declarations: [
    BoxComponent,
    ChartComponent,
    PriceStatComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
     BoxComponent,
    ChartComponent,
    PriceStatComponent,
  ]
})
export class StatCompModule { }
