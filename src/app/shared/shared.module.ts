import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from "../modules/material-ui.module"

// import {NgbModule} from "@ng-bootstrap/ng-bootstrap";



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DropdownModule,
    MaterialModule
    // NgbModule.forRoot()
  ],
  exports: [
    HeaderComponent,
    ReactiveFormsModule,
    FormsModule,
    DropdownModule
  ]
})
export class SharedModule { }
