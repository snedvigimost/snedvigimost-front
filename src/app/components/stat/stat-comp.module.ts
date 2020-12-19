import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import {BoxComponent} from './box/box.component';
import {ChartComponent} from './chart/chart.component';
import {PriceStatComponent} from './price-stat/price-stat.component';
import { StackedBarChartComponent } from './stacked-bar-chart/stacked-bar-chart.component';


@NgModule({
  declarations: [
    BoxComponent,
    ChartComponent,
    PriceStatComponent,
    StackedBarChartComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
     BoxComponent,
    ChartComponent,
    PriceStatComponent,
    StackedBarChartComponent
  ]
})
export class StatCompModule { }
