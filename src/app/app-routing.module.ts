import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './core/layouts/auth-layout/auth-layout.component';
import { MainHomeComponent } from './core/home/pages/main-home/main-home.component';
import { LoginComponent } from './core/auth/login/login.component';
import { ContentLayoutComponent } from './core/content-pages/content-layout/content-layout.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: './core/content-pages/content-pages.module#ContentPagesModule',
    component: ContentLayoutComponent
},
  {
    path: 'auth',
    loadChildren: './core/auth/auth.module#AuthModule',
    component: AuthLayoutComponent
    
  }
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{ scrollPositionRestoration: 'enabled' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
