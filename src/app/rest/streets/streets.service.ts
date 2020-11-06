import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { StreetDto } from './streets.dto';
import { HttpService } from '../http.service';
import { PaginationDto } from '../pagination/pagination.dto';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StreetsService {

  constructor(private http: HttpService) { }

  getStreets(params?: {name?: string, district?: number}): Observable<PaginationDto<StreetDto>> {
    return this.http.getAllWithPagination<StreetDto>(`${environment.apiUrl}/streets/`, params, StreetDto);
  }

}
