import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';

import {StatComponent} from './stat.component';
import {StatRoutingModule} from './stat-routing.module';
import {StatCompModule} from '../../components/stat/stat-comp.module';
import {CardModule} from '../../components/main/card/card.module';


@NgModule({
  declarations: [
    StatComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    StatCompModule,
    CardModule,
    StatRoutingModule,
  ]
})
export class StatModule {
}
