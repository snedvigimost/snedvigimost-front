import { Injectable } from '@angular/core';

import {delay} from 'rxjs/operators';
import { Observable } from 'rxjs';

import { ListingsDto } from './listings.dto';
import { HttpService } from '../http.service';
import { PaginationDto } from '../pagination/pagination.dto';
import { PaginationParamsDto } from '../pagination/pagination.params.dto';

@Injectable({
  providedIn: 'root'
})
export class ListingsService {
  apiUrl = 'http://127.0.0.1:4222/api/v1';

  constructor(private http: HttpService) { }

  getListings(params?: PaginationParamsDto): Observable<PaginationDto<ListingsDto>> {
    return this.http.getAllWithPagination<ListingsDto>(`${this.apiUrl}/listings/`, params, ListingsDto);
  }

  publish(id): Observable<ListingsDto> {
    return this.http.patch<ListingsDto>(`${this.apiUrl}/listings/${id}/`, {
      isPublished: true
    }).pipe(delay(1000));
  }

}
