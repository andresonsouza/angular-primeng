import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { ProductsComponent } from './products/products.component';
import { PeopleComponent } from './people/people.component';


@NgModule({
  declarations: [ProductsComponent, PeopleComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
