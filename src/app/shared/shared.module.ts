import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from "../modules/material-ui.module"

import {CheckboxModule} from 'primeng/checkbox';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ForgotPasswordDialogComponent } from './components/forgot-password-dialog/forgot-password-dialog.component';

// import {NgbModule} from "@ng-bootstrap/ng-bootstrap";



@NgModule({
  declarations: [HeaderComponent, ForgotPasswordDialogComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DropdownModule,
    MaterialModule,
    CheckboxModule,
    SlickCarouselModule
    // NgbModule.forRoot()
  ],
  exports: [
    HeaderComponent,
    ReactiveFormsModule,
    FormsModule,
    DropdownModule,
    CheckboxModule,
    SlickCarouselModule,
    MaterialModule
  ]
})
export class SharedModule { }
