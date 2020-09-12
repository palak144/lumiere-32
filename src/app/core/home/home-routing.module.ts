import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { MainHomeComponent } from './pages/User-dashboard/main-home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { AddAddressComponent } from 'src/app/shared/components/add-address/add-address.component';


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
        {
          path: 'orders',
          component: OrdersComponent,
        },
        {
          path: 'wishlist',
          component: WishlistComponent,
        },
        {
          path: ':id/edit',
          component: AddAddressComponent,
        }
      ]
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
