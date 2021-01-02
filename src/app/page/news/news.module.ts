import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { CreateNewsComponent } from './create-news/create-news.component';
import { NewsItemComponent } from './news-item/news-item.component';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    NewsComponent,
    CreateNewsComponent,
    NewsItemComponent,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    CKEditorModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule,
    ShareButtonsModule,
    ShareIconsModule,
    ReactiveFormsModule,
    NewsRoutingModule
  ]
})
export class NewsModule { }
