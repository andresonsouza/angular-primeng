import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/models/product';
import { ProductService } from '../../shared/services/product.service';

import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class ProductsComponent implements OnInit {
  displayDialog: boolean;

  productForm: FormGroup;
  id: any;
  product: Product = {};

  newProduct: boolean;

  products: Product[];
  cols: any[];



  constructor(
    private productService: ProductService,
    private http: HttpClient,
    private confirmationService: ConfirmationService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.listProducts();

    this.productForm = this.formBuilder.group(
      {
        id: [''],
        codigoErp: [''],
        apresentacao: [''],
        nomeComercial: [''],
        nomeComercialComApresentacao: [''],
        unidadeMedidaAnvisa: [''],
        codigoBarrasPrincipal: ['']
      });
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
    this.productService.updateProduct(this.id, this.productForm.value)
    .pipe(first())
    .subscribe(
      data => {
        alert('Produto atualizado com sucesso!');
      },
      error => {
        alert('Erro ao atualizar o produto!');
      }
    );
  }

  cancel(): void {
    this.displayDialog = false;
  }

  onSubmit(): void {
    this.products = [...this.products];
    this.displayDialog = false;
    this.product = {};
  }

  showDialogToAdd(): void {
    this.newProduct = true;
    this.product = {};
    this.displayDialog = true;
  }

}
