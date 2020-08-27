import { Product } from './../models/product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  readonly url = environment.host;
  private productsSubject$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(null);

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}/products`);
  }

  registerProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.url}/products`, product);
  }

  // deleteProduct(id: string): Observable<any> {
  //   return this.http.delete(this.url + '/products/' + id);
  // }

  deleteProduct(id: string): Observable<any> {
    return this.http.delete(`${this.url}/products/` + id);
  }

  updateProduct(prod: Product): Observable<any> {
    return this.http.patch(`${this.url}/products/`, {...prod})
      .pipe(
        tap(() => {
          const products = this.productsSubject$.getValue();
          const i = products.findIndex(p => p.id === prod.id);
          if (i >= 0) {
            products.splice(i, 1);
          }
        })
      );
  }

}
