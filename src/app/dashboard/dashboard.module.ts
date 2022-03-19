import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { AddServiceComponent } from './add-service/add-service.component';
import { AddReviewComponent } from './add-review/add-review.component';



@NgModule({
  declarations: [
    DashboardComponent,
    AddDoctorComponent,
    AddServiceComponent,
    AddReviewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  exports:[
    DashboardComponent,
    AddDoctorComponent,
    AddServiceComponent,
    AddReviewComponent,
  ]

})
export class DashboardModule { }
