import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private __url = 'https://fast-ravine-56232.herokuapp.com/api';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    this.__url += '/products';
    return this.http.get(this.__url);
  }
}
