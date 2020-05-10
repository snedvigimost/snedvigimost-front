import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PaginationDto} from '../pagination/pagination.dto';
import {ListingsDto} from './listings.dto';

@Injectable({
  providedIn: 'root'
})
export class ListingsService {
  apiUrl = 'http://127.0.0.1:4222/api/v1';

  constructor(private http: HttpClient) { }

  getListings(): Observable<PaginationDto<ListingsDto>> {
    return this.http.get<PaginationDto<ListingsDto>>(`${this.apiUrl}/listings/`);
  }

}
