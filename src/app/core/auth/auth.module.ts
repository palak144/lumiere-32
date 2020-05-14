import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from '../../shared/shared.module';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { NgxLoadingModule } from 'ngx-loading';



@NgModule({
  declarations: [LoginComponent,RegisterComponent, VerifyEmailComponent],
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule,
    NgxLoadingModule.forRoot({}),

  ]
})
export class AuthModule { }
