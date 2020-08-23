import { catchError, tap } from 'rxjs/operators';
import { Product } from './../models/product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  readonly url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getProducts(): any {
    return this.http.get<any>(`${this.url}/products`);
  }


  registerProduct(product: Product): Observable<Product>{
    return this.http.post<Product>(`${this.url}/products`, product);
  }

}
