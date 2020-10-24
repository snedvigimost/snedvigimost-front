import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { MicroDistrictDto } from './district.dto';
import { HttpService } from '../http.service';
import { PaginationDto } from '../pagination/pagination.dto';

@Injectable({
  providedIn: 'root'
})
export class MicroDistrictsService {
  apiUrl = 'http://127.0.0.1:4222/api/v1';

  constructor(private http: HttpService) { }

  getMicroDistricts(params?: {name: string}): Observable<PaginationDto<MicroDistrictDto>> {
    return this.http.getAllWithPagination<MicroDistrictDto>(`${this.apiUrl}/districts/`, params, MicroDistrictDto);
  }

}
