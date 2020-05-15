import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from '../../shared/shared.module';
import { NgxLoadingModule } from 'ngx-loading';
import { NgOtpInputModule } from  'ng-otp-input';
import { NgxCaptchaModule } from 'ngx-captcha';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  declarations: [LoginComponent,RegisterComponent, ResetPasswordComponent],
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule,
    NgxLoadingModule.forRoot({}),
    NgOtpInputModule,
    NgxCaptchaModule,
  ]
})
export class AuthModule { }
