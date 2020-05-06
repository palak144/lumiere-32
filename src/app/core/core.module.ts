import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { AppModule } from '../app.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [AuthLayoutComponent],
  imports: [
    CommonModule,
    SharedModule,
    AppModule
  ]
})
export class CoreModule { }
