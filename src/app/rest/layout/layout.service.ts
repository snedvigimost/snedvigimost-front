import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { LayoutDto } from './layout.dto';
import { HttpService } from '../http.service';
import { PaginationDto } from '../pagination/pagination.dto';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  constructor(private http: HttpService) { }

  getLayouts(params?: any): Observable<PaginationDto<LayoutDto>> {
    return this.http.getAllWithPagination<LayoutDto>(`${environment.apiUrl}/layouts/`, params, LayoutDto);
  }

}
