import { ProductsComponent } from './products/products.component';
import { PeopleComponent } from './people/people.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: 'people', component: PeopleComponent },
      { path: 'products', component: ProductsComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
