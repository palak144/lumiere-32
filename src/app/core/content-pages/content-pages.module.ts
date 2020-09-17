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
import {PaginatorModule} from 'primeng/paginator';
import { VerticalFilterBarComponent } from '../vertical-filter-bar/vertical-filter-bar.component';
import { CheckboxFilterComponent } from '../vertical-filter-bar/checkbox-filter/checkbox-filter.component';
import { RangeFilterComponent } from '../vertical-filter-bar/range-filter/range-filter.component';
import { KeywordFilterComponent } from '../vertical-filter-bar/keyword-filter/keyword-filter.component';
import { ShowMoreModalComponent } from '../vertical-filter-bar/checkbox-filter/show-more-modal/show-more-modal.component';
import {SliderModule} from 'primeng/slider';

@NgModule({
  declarations: [
    LandingComponent,
    MedicalEquipmentComponent,
    GetEquipmentComponent,
    DentalEquipmentComponent,
    VerticalFilterBarComponent,
    CheckboxFilterComponent,
    RangeFilterComponent,
    KeywordFilterComponent,
    ShowMoreModalComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    SharedModule,PaginatorModule,
    ContentPagesRoutingModule,
    SliderModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class ContentPagesModule { }
