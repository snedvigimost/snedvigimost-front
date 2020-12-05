import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AboutComponent} from './page/about/about.component';
import {DatabaseComponent} from './page/database/database.component';
import {ListingListComponent} from './page/main/listing-list/listing-list.component';
import {CreateFormComponent} from './components/create-form/create-form.component';
import {ListingItemComponent} from './components/listing-item/listing-item.component';
import {StatComponent} from './page/stat/stat.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./page/main/main.module').then(m => m.MainModule)
  },
  {
    path: 'stat',
    loadChildren: () => import('./page/stat/stat-routing.module').then(m => m.StatRoutingModule)
  },
  {
    path: 'database',
    loadChildren: () => import('./page/database/database.module').then(m => m.DatabaseModule)
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'new',
    component: CreateFormComponent
  },
  {
    path: 'listing/:id',
    component: ListingItemComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
