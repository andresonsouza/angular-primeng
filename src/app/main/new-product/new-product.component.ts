import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../../shared/services/product.service';
import { Product } from 'src/app/shared/models/product';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

  formProduct = this.fb.group({
    id: ['', [Validators.required]],
    codigoErp: ['', [Validators.required]],
    apresentacao: ['', [Validators.required]],
    nomeComercial: ['', [Validators.required]],
    nomeComercialComApresentacao: ['', [Validators.required]],
    unidadeMedidaAnvisa: ['', [Validators.required]],
    codigoBarrasPrincipal: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.formProduct.value);
    let p: Product = {
      ...this.formProduct.value
    };
    this.productService.registerProduct(p)
      .subscribe(
        (p) => {
          this.router.navigate(['../products'], { relativeTo: this.route });
        },
        error => {
          console.error(error);
        });
  }
}

