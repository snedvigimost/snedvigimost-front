import {Injectable} from '@angular/core';

import {delay} from 'rxjs/operators';
import {Observable} from 'rxjs';

import {ListingsDto} from './listings.dto';
import {HttpService} from '../http.service';
import {environment} from '../../../environments/environment';
import {PaginationDto} from '../pagination/pagination.dto';
import {PaginationParamsDto} from '../pagination/pagination.params.dto';

@Injectable({
  providedIn: 'root'
})
export class ListingsService {

  constructor(private http: HttpService) {
  }

  getListings(params?: PaginationParamsDto): Observable<PaginationDto<ListingsDto>> {
    return this.http.getAllWithPagination<ListingsDto>(`${environment.apiUrl}/listings/`, params, ListingsDto);
  }

  create(params): Observable<ListingsDto> {
    return this.http.create<ListingsDto>(`${environment.apiUrl}/listings/`, params);
  }

  publish(id): Observable<ListingsDto> {
    return this.http.patch<ListingsDto>(`${environment.apiUrl}/listings/${id}/`, {
      isPublished: true
    }).pipe(delay(1000));
  }

  getById(id): Observable<ListingsDto> {
    return this.http.get<ListingsDto>(`${environment.apiUrl}/listings/${id}/`);
  }

}
