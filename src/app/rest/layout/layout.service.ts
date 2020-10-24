import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { LayoutDto } from './layout.dto';
import { HttpService } from '../http.service';
import { PaginationDto } from '../pagination/pagination.dto';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  apiUrl = 'http://127.0.0.1:4222/api/v1';

  constructor(private http: HttpService) { }

  getLayouts(params?: any): Observable<PaginationDto<LayoutDto>> {
    return this.http.getAllWithPagination<LayoutDto>(`${this.apiUrl}/layouts/`, params, LayoutDto);
  }

}
