import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ListingListComponent} from './listing-list/listing-list.component';


const routes: Routes = [
  {
    path: '',
    component: ListingListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
