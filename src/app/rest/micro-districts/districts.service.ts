import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { MicroDistrictDto } from './district.dto';
import { HttpService } from '../http.service';
import { PaginationDto } from '../pagination/pagination.dto';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MicroDistrictsService {

  constructor(private http: HttpService) { }

  getMicroDistricts(params?: {name: string}): Observable<PaginationDto<MicroDistrictDto>> {
    return this.http.getAllWithPagination<MicroDistrictDto>(`${environment.apiUrl}/districts/`, params, MicroDistrictDto);
  }

}
