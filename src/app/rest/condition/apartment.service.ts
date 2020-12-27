import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Apartment } from './apartment.dto';
import { HttpService } from '../http.service';
import { PaginationDto } from '../pagination/pagination.dto';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {

  constructor(private http: HttpService) { }

  getApartmentCondition(params?: any): Observable<PaginationDto<Apartment>> {
    return this.http.getAllWithPagination<Apartment>(`${environment.apiUrl}/apartment-condition/`, params, Apartment);
  }

}
