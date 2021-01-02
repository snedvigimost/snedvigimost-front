import { Component, OnInit } from '@angular/core';

import { NewsService } from '../../rest/news/news.service';
import { PaginationDto } from '../../rest/pagination/pagination.dto';
import { NewsDto } from '../../rest/news/news.dto';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: [ './news.component.scss' ]
})
export class NewsComponent implements OnInit {
  result: PaginationDto<NewsDto>;


  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getNews().subscribe(news => {
      console.log(news);
      this.result = news;
    })

  }



}
