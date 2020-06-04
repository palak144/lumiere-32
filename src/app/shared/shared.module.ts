import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from "../modules/material-ui.module"

import {CheckboxModule} from 'primeng/checkbox';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ForgotPasswordDialogComponent } from './components/forgot-password-dialog/forgot-password-dialog.component';
import { ToastrModule } from 'ngx-toastr';
import { NgxLoadingModule } from 'ngx-loading';
import { NgOtpInputModule } from  'ng-otp-input';
import { FooterComponent } from './footer/footer.component';
import { PostLoginHeaderComponent } from './components/post-login-header/post-login-header.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { SavedPaymentDetailsComponent } from './components/saved-payment-details/saved-payment-details.component';

// import {NgbModule} from "@ng-bootstrap/ng-bootstrap";



@NgModule({
  declarations: [HeaderComponent, ForgotPasswordDialogComponent, FooterComponent, PostLoginHeaderComponent, ChangePasswordComponent, SavedPaymentDetailsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DropdownModule,
    MaterialModule,
    CheckboxModule,
    SlickCarouselModule,
    ToastrModule.forRoot(),
    NgxLoadingModule.forRoot({}),
    NgOtpInputModule,
  ],
  exports: [
    HeaderComponent,
    ReactiveFormsModule,
    FormsModule,
    DropdownModule,
    CheckboxModule,
    SlickCarouselModule,
    MaterialModule,
    ToastrModule,
    NgxLoadingModule,
    NgOtpInputModule,
    FooterComponent
  ]
})
export class SharedModule { }
