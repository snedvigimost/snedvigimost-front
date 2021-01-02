import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import slugify from '@sindresorhus/slugify';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { NewsService } from '../../../rest/news/news.service';

@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.component.html',
  styleUrls: [ './create-news.component.scss' ]
})
export class CreateNewsComponent implements OnInit {
  title: string;
  body = '';
  subtitle: string;
  imageUrl: string;
  public Editor = ClassicEditor;
  toppings = new FormControl();

  toppingList: string[] = [ 'Iнфраструктура', 'Дім та затишок', 'Нерухомість', ];


  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
  }

  onSave() {
    this.newsService.create({
      title: this.title,
      subtitle: this.subtitle,
      body: this.body,
      imageUrl: encodeURI(this.imageUrl),
      slug: slugify(this.title),
    }).subscribe(news => {
      console.log(news);
    });
  }

}
