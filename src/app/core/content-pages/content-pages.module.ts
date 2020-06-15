import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentPagesRoutingModule } from './content-pages-routing.module';
import { LandingComponent } from './pages/landing/landing.component';
import { AuthRoutingModule } from '../../core/auth/auth-routing.module';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    SharedModule,
    ContentPagesRoutingModule
  ]
})
export class ContentPagesModule { }
