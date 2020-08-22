import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  saveProduct(): any {
    console.log(this.formProduct.value);
    alert('Salvo com sucesso!');
  }

}
