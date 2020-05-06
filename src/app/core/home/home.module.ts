import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MainHomeComponent } from './pages/main-home/main-home.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [MainHomeComponent, HomeLayoutComponent],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
