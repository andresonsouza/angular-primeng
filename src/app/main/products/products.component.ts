import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/models/product';
import { ProductService } from '../../shared/services/product.service';

import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class ProductsComponent implements OnInit {

  products: Product[];

  constructor(
    private productService: ProductService,
    private http: HttpClient) { }

  ngOnInit() {
    this.productService.getProducts()
    .subscribe(
      response => {
        this.products = response;
      },
      error => {
        alert('Erro ao carregar a lista de produtos!');
      }
    );
  }

}
