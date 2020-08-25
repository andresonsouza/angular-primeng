import { Product } from './../models/product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  readonly url = environment.host;

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}/products`);
  }

  registerProduct(product: Product): Observable<Product>{
    return this.http.post<Product>(`${this.url}/products`, product);
  }

  // deleteProduct(id: string): Observable<any> {
  //   return this.http.delete(this.url + '/products/' + id);
  // }

  deleteProduct(id: string): Observable<any> {
    return this.http.delete(`${this.url}/products/` + id);
  }

}
