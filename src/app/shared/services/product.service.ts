import { catchError, tap } from 'rxjs/operators';
import { Product } from './../models/product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  readonly urlApi = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.urlApi}/products`)
    .pipe(
      tap(res => console.log(res)),
      catchError((err) => {
        console.log(err);
        return throwError(err);
      })
    );
  }

}
