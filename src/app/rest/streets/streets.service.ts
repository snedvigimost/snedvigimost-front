import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { StreetDto } from './streets.dto';
import { HttpService } from '../http.service';
import { PaginationDto } from '../pagination/pagination.dto';

@Injectable({
  providedIn: 'root'
})
export class StreetsService {
  apiUrl = 'http://127.0.0.1:4222/api/v1';

  constructor(private http: HttpService) { }

  getStreets(params?: {name: string}): Observable<PaginationDto<StreetDto>> {
    return this.http.getAllWithPagination<StreetDto>(`${this.apiUrl}/streets/`, params, StreetDto);
  }

}
