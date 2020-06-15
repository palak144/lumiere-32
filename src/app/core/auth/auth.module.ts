import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { VerifyOtpComponent } from './verify-otp/verify-otp.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [LoginComponent,RegisterComponent, ResetPasswordComponent, VerifyOtpComponent],
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule,
    
    
  ]
})
export class AuthModule { }
