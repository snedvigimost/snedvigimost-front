import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { DistrictDto } from './district.dto';
import { HttpService } from '../http.service';
import { PaginationDto } from '../pagination/pagination.dto';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DistrictsService {

  constructor(private http: HttpService) { }

  getDistricts(params?: {name: string}): Observable<PaginationDto<DistrictDto>> {
    return this.http.getAllWithPagination<DistrictDto>(`${environment.apiUrl}/districts/`, params, DistrictDto);
  }

}
