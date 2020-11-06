import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpService } from '../http.service';
import {ImagesDto} from './images.dto';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private http: HttpService) { }

  uploadImage(data): Observable<ImagesDto> {
    return this.http.create<ImagesDto>(`${environment.apiUrl}/images`, data);
  }

}
