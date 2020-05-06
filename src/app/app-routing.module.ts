import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './core/layouts/auth-layout/auth-layout.component';
import { MainHomeComponent } from './core/home/pages/main-home/main-home.component';
import { LoginComponent } from './core/auth/login/login.component';


const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'auth',
  //   pathMatch: 'full'
  // },
  {
    path: 'auth',
    loadChildren: './core/auth/auth.module#AuthModule',
    component: AuthLayoutComponent
  },
  // {
  //   path:'**',
  //   redirectTo: 'auth'
  // }
  {
    path:'login',
    component:LoginComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
