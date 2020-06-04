import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { MainHomeComponent } from './pages/main-home/main-home.component';
import { ProfileComponent } from './pages/profile/profile.component';


const routes: Routes = [{

  path: '',
  children: [
    {
      path: '',
     component: HomeLayoutComponent,
      children: [
        {
          path: '',
          redirectTo: 'dashboard',
          pathMatch: 'full'
        },
        {
          path: 'dashboard',
          component: MainHomeComponent,
        },
        {
          path: 'profile',
          component: ProfileComponent,
        },
      ]
    }
  ]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
