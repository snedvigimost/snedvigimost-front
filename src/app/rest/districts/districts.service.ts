import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { DistrictDto } from './district.dto';
import { HttpService } from '../http.service';
import { PaginationDto } from '../pagination/pagination.dto';

@Injectable({
  providedIn: 'root'
})
export class DistrictsService {
  apiUrl = 'http://127.0.0.1:4222/api/v1';

  constructor(private http: HttpService) { }

  getDistricts(params?: {name: string}): Observable<PaginationDto<DistrictDto>> {
    return this.http.getAllWithPagination<DistrictDto>(`${this.apiUrl}/districts/`, params, DistrictDto);
  }

}
