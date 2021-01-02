import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { NewsDto } from './news.dto';
import { HttpService } from '../http.service';
import { PaginationDto } from '../pagination/pagination.dto';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpService) { }

  getNews(params?: any): Observable<PaginationDto<NewsDto>> {
    return this.http.getAllWithPagination<NewsDto>(`${environment.apiUrl}/news/`, params, NewsDto);
  }

  create(params: NewsDto): Observable<NewsDto> {
    return this.http.create<NewsDto>(`${environment.apiUrl}/news/`, params);
  }

  getBySlug(slug: string): Observable<NewsDto> {
    return this.http.get<NewsDto>(`${environment.apiUrl}/news/${slug}/`);
  }

}
