import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthLayoutComponent } from './core/layouts/auth-layout/auth-layout.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './core/auth/auth.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

import { SharedModule } from './shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BackendInterceptor } from './core/services/intercepter.service';
import { ContentLayoutComponent } from './core/content-pages/content-layout/content-layout.component';
import { ContentPagesModule } from './core/content-pages/content-pages.module';


import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './core/home/home.module';
import { HomeLayoutComponent } from './core/home/home-layout/home-layout.component';
import { ProjectLayoutComponent } from './core/layouts/project-layout/project-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    ContentLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HomeModule,
    ContentPagesModule,
    SharedModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
   ],
  exports: [
    NgbModule
  ],
  
  providers: [
    
    {
       provide: HTTP_INTERCEPTORS, useClass: BackendInterceptor, multi: true 
  },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
