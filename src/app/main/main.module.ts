import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { ProductsComponent } from './products/products.component';
import { PeopleComponent } from './people/people.component';
import { HomeComponent } from './home/home.component';
import { PrimengModule } from '../primeng.module';
import { NewProductComponent } from './new-product/new-product.component';
import { MenuComponent } from './menu/menu.component';
import { EditProductComponent } from './edit-product/edit-product.component';


@NgModule({
  declarations: [
    ProductsComponent,
    PeopleComponent,
    HomeComponent,
    NewProductComponent,
    MenuComponent,
    EditProductComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    PrimengModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class MainModule { }
