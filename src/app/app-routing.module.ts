import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AboutComponent} from './components/about/about.component';
import {DatabaseComponent} from './components/database/database.component';
import {ListingListComponent} from './components/listing-list/listing-list.component';
import {CreateFormComponent} from './components/create-form/create-form.component';
import {ListingItemComponent} from './components/listing-item/listing-item.component';
import {StatComponent} from './page/stat/stat.component';



const routes: Routes = [
  {path: '', component: ListingListComponent},
  {path: 'about', component: AboutComponent},
  {path: 'stat', component: StatComponent},
  {path: 'database', component: DatabaseComponent},
  {path: 'new', component: CreateFormComponent},
  {path: 'listing/:id', component: ListingItemComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
