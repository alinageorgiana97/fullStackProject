import { Injectable } from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Wine} from '../common/wine';
import {catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class WineService {

  private baseUrl = 'http://localhost:8080/wine/list';

  constructor(private httpClient: HttpClient) {
  }


  getProductList(): Observable<Wine[]> {
    return this.httpClient.get<Wine[]>(this.baseUrl);
  }

}

