import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthLayoutComponent } from './core/layouts/auth-layout/auth-layout.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './core/auth/auth.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { MaterialModule } from "./modules/material-ui.module"


@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    SharedModule,
    BrowserAnimationsModule,
    NgbModule,
    MaterialModule
  
  ],
  exports: [
    NgbModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
