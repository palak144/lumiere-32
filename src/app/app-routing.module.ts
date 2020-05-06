import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './core/layouts/auth-layout/auth-layout.component';


const routes: Routes = [
  
  // {
  //   path: 'auth',
  //  // redirectTo: 'auth',
  //   component: AuthLayoutComponent
  // },
  // {
  //   path: '',
  //   loadChildren: './core/auth/auth.module#AuthModule',
  //    //component: AuthLayoutComponent
  // },

  {
    path: 'auth',
    loadChildren: './core/auth/auth.module#AuthModule',
    component: AuthLayoutComponent
  },
  {
    path: '**',
    redirectTo: 'auth'
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{ scrollPositionRestoration: 'enabled' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
