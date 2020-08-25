import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/models/product';
import { ProductService } from '../../shared/services/product.service';

import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class ProductsComponent implements OnInit {

  products: Product[];
  cols: any[];

  constructor(
    private productService: ProductService,
    private http: HttpClient,
    private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.listProducts();
  }

  listProducts(): void {
    this.productService.getProducts()
      .subscribe(
        response => {
          this.products = response;

          this.cols = [
            { field: 'id', header: 'ID' },
            { field: 'codigoErp', header: 'Código ERP' },
            { field: 'apresentacao', header: 'Apresentação' },
            { field: 'nomeComercial', header: 'Nome Comercial' },
            { field: 'nomeComercialComApresentacao', header: 'Nome Comercial com Apresentação' },
            { field: 'unidadeMedidaAnvisa', header: 'Unidade Medida Anvisa' },
            { field: 'codigoBarrasPrincipal', header: 'Código Barras Principal' },
          ];
        },
        error => {
          alert('Erro ao carregar a lista de produtos!');
        }
      );
  }

  deleteProduct(id: string): void {
    this.confirmationService.confirm({
      message: 'Tem certeza de que deseja executar esta ação?',
      accept: () => {
        this.productService.deleteProduct(id)
          .subscribe(
            res => {
              this.listProducts();
            },
            error => {
              alert('Erro ao deletar o produto!');
            }
          );
      }
    });
  }

  editProduct(): void {

  }

}
