import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpService } from '../http.service';
import {ImagesDto} from './images.dto';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  apiUrl = 'http://127.0.0.1:4222/api/v1';

  constructor(private http: HttpService) { }

  uploadImage(data): Observable<ImagesDto> {
    return this.http.create<ImagesDto>(`${this.apiUrl}/images`, data);
  }

}
