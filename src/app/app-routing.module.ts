import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './core/layouts/auth-layout/auth-layout.component';
import { AuthModule } from './core/auth/auth.module';
//import { LoginComponent } from './core/auth/login/login.component';
const routes: Routes = [
  
  {
    path: '**',
    redirectTo: 'auth'
  },
  {
    path: 'auth',
    loadChildren: './core/auth/auth.module#AuthModule',
     component: AuthLayoutComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
