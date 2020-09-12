import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AuthLayoutComponent } from './core/layouts/auth-layout/auth-layout.component';
import { MainHomeComponent } from './core/home/pages/User-dashboard/main-home.component';
import { LoginComponent } from './core/auth/login/login.component';
import { ContentLayoutComponent } from './core/content-pages/content-layout/content-layout.component';
import { HomeLayoutComponent } from './core/home/home-layout/home-layout.component';
import { ProjectLayoutComponent } from './core/layouts/project-layout/project-layout.component';
import { 
  AuthGuardService as AuthGuard 
} from './core/services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    // loadChildren: './core/content-pages/content-pages.module#ContentPagesModule',
    loadChildren: () => import('./core/content-pages/content-pages.module').then(m => m.ContentPagesModule),
    component: ContentLayoutComponent,
    // canActivate: [AuthGuard] 
  },
  {
    path: 'auth',
    // loadChildren: './core/auth/auth.module#AuthModule',
    loadChildren: () => import('./core/auth/auth.module').then(m => m.AuthModule),
    component: AuthLayoutComponent,
    // canActivate: [AuthGuard] 
    
  },
  {
    path: 'user',
    // loadChildren: './core/home/home.module#HomeModule',
    loadChildren: () => import('./core/home/home.module').then(m => m.HomeModule),
    component: HomeLayoutComponent,
    // canActivate: [AuthGuard] 
    
  }

 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { 
      scrollPositionRestoration: 'enabled',
      onSameUrlNavigation: 'reload'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
