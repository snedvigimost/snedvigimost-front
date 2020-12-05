import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardComponent} from "./card.component";
import {RouterModule} from "@angular/router";
import {LightboxModule} from "@ngx-gallery/lightbox";
import {GalleryModule} from "@ngx-gallery/core";
import {GallerizeModule} from "@ngx-gallery/gallerize";


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LightboxModule,
    GalleryModule,
    GallerizeModule,
  ],
  declarations: [CardComponent],
  exports: [CardComponent],
  entryComponents: [CardComponent]
})
export class CardModule {
}
