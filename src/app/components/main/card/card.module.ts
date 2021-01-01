import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LightboxModule } from '@ngx-gallery/lightbox';
import { GalleryModule } from '@ngx-gallery/core';
import { GallerizeModule } from '@ngx-gallery/gallerize';

import { TranslocoMessageFormatModule } from '@ngneat/transloco-messageformat';

import { CardComponent } from './card.component';
import { TranslocoRootModule } from '../../../transloco/transloco-root.module';
import { IconDefinition } from '@ant-design/icons-angular';
import {
  HeartFill, HeartOutline,
} from '@ant-design/icons-angular/icons';
import { NzIconModule } from 'ng-zorro-antd/icon';


const icons: IconDefinition[] = [
  HeartOutline,
  HeartFill
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LightboxModule,
    GalleryModule,
    NzIconModule.forRoot(icons),
    GallerizeModule,
    TranslocoRootModule,
    TranslocoMessageFormatModule.init(),
  ],
  declarations: [ CardComponent ],
  exports: [ CardComponent ],
  entryComponents: [ CardComponent ]
})
export class CardModule {
}
