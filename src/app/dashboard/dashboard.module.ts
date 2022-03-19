import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { AddMediServiceComponent } from './add-medi-service/add-medi-service.component';



@NgModule({
  declarations: [
    DashboardComponent,
    AddDoctorComponent,
    AddReviewComponent,
    AddMediServiceComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  exports:[
    DashboardComponent,
    AddDoctorComponent,
    AddReviewComponent,
    AddMediServiceComponent
  ]

})
export class DashboardModule { }
