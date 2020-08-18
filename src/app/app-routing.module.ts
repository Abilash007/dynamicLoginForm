import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

/**
 * implemented Lazy loading
 */

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'authorized',
    loadChildren: () => import('../app/authorized-User/home/home.module').then(m => m.HomeModule)
  },
  {
    path: '**',
    component: LoginComponent
  },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
