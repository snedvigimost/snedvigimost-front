import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { NewsComponent } from './news.component';
import { CreateNewsComponent } from './create-news/create-news.component';
import { NewsItemComponent } from './news-item/news-item.component';


const routes: Routes = [
  {
    path: '',
    component: NewsComponent
  },
  {
    path: 'create',
    component: CreateNewsComponent
  },
  {
    path: ':slug',
    component: NewsItemComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule {
}
