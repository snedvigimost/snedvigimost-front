import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

import {HttpService} from '../http.service';
import {PrivatRateDto} from './privatRateDto';
import {rate} from './privat-mock';

@Injectable({
  providedIn: 'root'
})
export class RateService {

  constructor(private http: HttpService) {
  }

  getRate(): Observable<PrivatRateDto[]> {
    return of<PrivatRateDto[]>(rate);
    // return this.http.get<PrivatRateDto[]>('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');
  }
}
