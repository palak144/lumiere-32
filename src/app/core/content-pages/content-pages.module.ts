import { NgModule, NO_ERRORS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentPagesRoutingModule } from './content-pages-routing.module';
import { LandingComponent } from './pages/landing/landing.component';
import { AuthRoutingModule } from '../../core/auth/auth-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md'


@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    SharedModule,
    ContentPagesRoutingModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class ContentPagesModule { }
