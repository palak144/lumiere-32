import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainHomeComponent } from './pages/User-dashboard/main-home.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { SharedModule } from '../../shared/shared.module';
import { ProfileComponent } from './pages/profile/profile.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';

 
@NgModule({
  declarations: [MainHomeComponent, HomeLayoutComponent, ProfileComponent, WishlistComponent, OrdersComponent],
  imports: [
    CommonModule,
    NgbModule,
    SharedModule,
    HomeRoutingModule
  ],
})
export class HomeModule { }
