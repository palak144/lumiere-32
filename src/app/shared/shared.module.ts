import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CheckboxModule} from 'primeng/checkbox';
import { SlickCarouselModule } from 'ngx-slick-carousel';
// import {NgbModule} from "@ng-bootstrap/ng-bootstrap";



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DropdownModule,
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
    SlickCarouselModule
  ]
})
export class SharedModule { }
