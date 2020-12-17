import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ListingListComponent} from './listing-list/listing-list.component';
import {ListingItemComponent} from "../../components/listing-item/listing-item.component";


const routes: Routes = [
  {
    path: '',
    component: ListingListComponent
  },
   {
    path: 'listing/:id',
    component: ListingItemComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
