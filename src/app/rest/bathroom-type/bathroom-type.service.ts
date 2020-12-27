import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { BathroomTypeDto } from './bathroom-type.dto';
import { HttpService } from '../http.service';
import { PaginationDto } from '../pagination/pagination.dto';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BathroomTypeService {

  constructor(private http: HttpService) { }

  getBathroomType(params?: any): Observable<PaginationDto<BathroomTypeDto>> {
    return this.http.getAllWithPagination<BathroomTypeDto>(`${environment.apiUrl}/bathroom-type/`, params, BathroomTypeDto);
  }

}
