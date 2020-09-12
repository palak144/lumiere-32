import { NgModule, NO_ERRORS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentPagesRoutingModule } from './content-pages-routing.module';
import { LandingComponent } from './pages/landing/landing.component';
import { AuthRoutingModule } from '../../core/auth/auth-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md'

import { MedicalEquipmentComponent } from './pages/Medical/medical-equipment.component';
import { GetEquipmentComponent } from './pages/Product-listing/get-equipment.component';
import { DentalEquipmentComponent } from './pages/Dental/dental-equipment.component';

@NgModule({
  declarations: [LandingComponent, MedicalEquipmentComponent, GetEquipmentComponent, DentalEquipmentComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    SharedModule,
    ContentPagesRoutingModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class ContentPagesModule { }
