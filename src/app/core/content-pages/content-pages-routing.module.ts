import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { ContentLayoutComponent } from './content-layout/content-layout.component';


const routes: Routes = [
  {
    path: '',
    component: ContentLayoutComponent,
    children: [
      {
        path: '',
        component: LandingComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentPagesRoutingModule { }
