import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private __url = 'https://fast-ravine-56232.herokuapp.com/api';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    const url = `${this.__url}/products`;
    return this.http.get<Product[]>(url);
  }

  getProduct(id: string): Observable<Product> {
    const url = `${this.__url}/products/${id}`;
    // console.log(url);
    return this.http.get<Product>(url);
  }
}
