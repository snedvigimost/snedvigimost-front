import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHandler, HttpParams } from '@angular/common/http';

import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';


import { PaginationDto } from './pagination/pagination.dto';
import { ERROR_MESSAGES } from './error-messages-config';
import { ErrorResponseModel } from './error-response-model';
import { NotificationMessageConfig } from './notification-message-config.interface';

@Injectable()
export class HttpService extends HttpClient {

  constructor(
    handler: HttpHandler,
  ) {
    super(handler);
  }

  get<T>(
    url: string,
    params?,
    DtoClass?: new (responseValue) => T
  ): Observable<T> {
    return super.get<T>(url, { params: this.parseParams(params) })
      .pipe(res => this.handleResponse(res, ERROR_MESSAGES),
        map(response => DtoClass ? new DtoClass(response) : response));
  }

  getAll<T>(
    url: string,
    params?,
    DtoClass?: new (responseValue) => T
  ): Observable<T[]> {
    return super.get<T[]>(url, { params: this.parseParams(params) })
      .pipe(res => this.handleResponse(res, ERROR_MESSAGES),
        map(response => DtoClass ? response.map(responseItem => new DtoClass(responseItem)) : response)
      );
  }

  // tslint:disable-next-line:no-shadowed-variable
  getAllWithPagination<T>(
    url: string,
    params?,
    DtoClass?: new(responseItem) => T
  ): Observable<PaginationDto<T>> {
    return super.get<PaginationDto<T>>(url, { params: this.parseParams(params) })
      .pipe(res => this.handleResponse(res, ERROR_MESSAGES),
        map(response => new PaginationDto({ ...response, DtoClass }))
      );
  }

  update<T>(url: string, params): Observable<T> {
    return super.put<T>(url, params);
  }

  create<T>(url: string, params): Observable<T> {
    return super.post<T>(url, params);
  }

  parseParams(data = {}): HttpParams {
    let params = new HttpParams();
    Object.keys(data).forEach(key => {
      if (Array.isArray(data[key]) && data[key].length) {
        for (const item of data[key]) {
          params = params.append(key, String(item));
        }
      } else if ((data[key] || typeof data[key] === 'boolean') && !Array.isArray(data[key])) {
        params = params.append(key, String(data[key]));
      }
    });
    return params;
  }

  handleResponse<T>(response: Observable<T>, config = {}): Observable<T> {
    return response
      .pipe(
        map(res => this.successResponse(res, config)),
        catchError(error => this.errorResponse(error, config))
      );
  }

  successResponse(response, config) {
    if (config[ 200 ]) {
      console.log('success');
      // this.notification.success(config[ 200 ]);
    }
    return response;
  }

  errorResponse(errorResponse: HttpErrorResponse, config: NotificationMessageConfig): Observable<never> {
    const error = new ErrorResponseModel(errorResponse.error);
    const errorMessage = config[ errorResponse.status ] || ERROR_MESSAGES[ errorResponse.status ] + error.errorMessage;
    if (errorMessage) {
      console.log(errorMessage);
    }
    return throwError(errorResponse);
  }
}
