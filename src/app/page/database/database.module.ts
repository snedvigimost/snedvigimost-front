import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {GoogleMapsModule} from '@angular/google-maps';
import {FormsModule} from '@angular/forms';

import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import {NzSpinModule} from 'ng-zorro-antd/spin';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {LottieModule} from 'ngx-lottie';

import * as OverlayscrollbarsModule from 'overlayscrollbars-ngx';
import {GalleryModule} from '@ngx-gallery/core';
import {GallerizeModule} from '@ngx-gallery/gallerize';
import {LightboxModule} from '@ngx-gallery/lightbox';

import {AgGridModule} from 'ag-grid-angular';

import {NzSliderModule} from 'ng-zorro-antd/slider';
import {NzRadioModule} from 'ng-zorro-antd/radio';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzCascaderModule} from 'ng-zorro-antd/cascader';
import {NzPaginationModule} from 'ng-zorro-antd/pagination';
import {NzInputNumberModule} from 'ng-zorro-antd/input-number';

import {TranslocoRootModule} from '../../transloco/transloco-root.module';
import {playerFactory} from '../../app.module';
import {DatabaseRoutingModule} from './database-routing.module';
import {DatabaseComponent} from './database.component';
import {CardModule} from '../../components/main/card/card.module';
import {DialogComponent} from '../../components/database/dialog/dialog.component';
import {SpinnerComponent} from '../../components/_spinner/spinner.component';


@NgModule({
  declarations: [
    DatabaseComponent,
    DialogComponent,
    SpinnerComponent,
  ],
  imports: [
    CommonModule,
    DatabaseRoutingModule,
    CardModule,
    MatIconModule,
    GoogleMapsModule,
    NzSpinModule,
    LightboxModule,
    GalleryModule,
    GallerizeModule,
    NzSelectModule,
    OverlayscrollbarsModule.OverlayscrollbarsModule,
    FormsModule,
    AgGridModule.withComponents([]),
    CommonModule,
    MatDialogModule,
    NzSelectModule,
    MatButtonModule,
    // NzIconModule.forRoot(icons),
    NzSliderModule,
    NzRadioModule,
    NzButtonModule,
    NzInputModule,
    NzCascaderModule,
    GoogleMapsModule,
    MatInputModule,
    MatExpansionModule,
    NzPaginationModule,
    NzInputNumberModule,
    MatButtonToggleModule,
    LottieModule.forRoot({player: playerFactory}),
    MatCardModule,
    MatSelectModule,
    TranslocoRootModule
  ]
})
export class DatabaseModule {
}


