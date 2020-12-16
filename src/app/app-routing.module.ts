import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AboutComponent} from './page/about/about.component';
import {CreateFormComponent} from './components/create-form/create-form.component';
import {ListingItemComponent} from './components/listing-item/listing-item.component';
import {LoginComponent} from "./page/login/login.component";


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./page/main/main.module').then(m => m.MainModule)
  },
  {
    path: 'stat',
    loadChildren: () => import('./page/stat/stat.module').then(m => m.StatModule)
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
    path: 'login',
    component: LoginComponent
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
