import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const authModule = () => import('./auth/auth.module').then(m => m.AuthModule);
const mainModule = () => import('./main/main.module').then(m => m.MainModule);

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/main/people'},
  { path: 'main', loadChildren: mainModule },
  { path: 'auth', loadChildren: authModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
