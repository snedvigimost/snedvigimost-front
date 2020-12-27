import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Heat } from './heat.dto';
import { HttpService } from '../http.service';
import { PaginationDto } from '../pagination/pagination.dto';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeatService {

  constructor(private http: HttpService) { }

  getHeatingType(params?: any): Observable<PaginationDto<Heat>> {
    return this.http.getAllWithPagination<Heat>(`${environment.apiUrl}/heating-type/`, params, Heat);
  }

}
