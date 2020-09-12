import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { ContentLayoutComponent } from './content-layout/content-layout.component';
import { MedicalEquipmentComponent } from './pages/Medical/medical-equipment.component';
import { GetEquipmentComponent } from './pages/Product-listing/get-equipment.component';
import { DentalEquipmentComponent } from './pages/Dental/dental-equipment.component';

const routes: Routes = [
  {
    path: '',
    component: ContentLayoutComponent,
    children: [
      {
        path: '',
        component: LandingComponent
      },
      {
        path: 'medical',
        component: MedicalEquipmentComponent,
      },
      {
        path: 'dental', 
        component: DentalEquipmentComponent,
      },
      {
        path: 'product-listing',
        component: GetEquipmentComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentPagesRoutingModule { }
