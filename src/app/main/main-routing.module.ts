import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { PeopleComponent } from './people/people.component';
import { HomeComponent } from './home/home.component';
import { NewProductComponent } from './new-product/new-product.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: 'people', component: PeopleComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'add', component: NewProductComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
