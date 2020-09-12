import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { AppModule } from '../app.module';
import { SharedModule } from '../shared/shared.module';
import { ProjectLayoutComponent } from './layouts/project-layout/project-layout.component';

import {AccordionModule} from 'primeng/accordion';
import {MenuItem} from 'primeng/primeng';
@NgModule({
  declarations: [AuthLayoutComponent, ProjectLayoutComponent],
  imports: [
    CommonModule,
    SharedModule,
    AppModule,
    AccordionModule
  ]
})
export class CoreModule { }