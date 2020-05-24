import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AboutComponent} from './components/about/about.component';
import {DatabaseComponent} from './components/database/database.component';
import {ListingListComponent} from './components/listing-list/listing-list.component';


const routes: Routes = [
  {path: '', component: ListingListComponent},
  {path: 'about', component: AboutComponent},
  {path: 'database', component: DatabaseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
