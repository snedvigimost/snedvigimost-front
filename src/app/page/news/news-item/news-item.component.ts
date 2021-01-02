import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NewsService } from '../../../rest/news/news.service';
import { NewsDto } from '../../../rest/news/news.dto';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: [ './news-item.component.scss' ]
})
export class NewsItemComponent implements OnInit {
  news: NewsDto;

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService
  ) { }

  ngOnInit(): void {
    const newsSlug = this.route.snapshot.paramMap.get('slug');
    this.newsService.getBySlug(newsSlug).subscribe(news => {
      console.log(news);
      this.news = news;
    });
    console.log(newsSlug);
  }

}
