import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from "../../modules/material-ui.module"



@NgModule({
  declarations: [LoginComponent,RegisterComponent],
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule,
    MaterialModule
  ]
})
export class AuthModule { }
