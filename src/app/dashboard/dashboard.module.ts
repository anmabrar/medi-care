import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { AddMediServiceComponent } from './add-medi-service/add-medi-service.component';
import { AllReviewComponent } from './all-review/all-review.component';
import { ReviewModalComponent } from './review-modal/review-modal.component';
import { AllMediServicesComponent } from './all-medi-services/all-medi-services.component';
import { MediServicesModalComponent } from './medi-services-modal/medi-services-modal.component';
import { BestDoctorComponent } from './best-doctor/best-doctor.component';
import { BestServicesComponent } from './best-services/best-services.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { ServicesListComponent } from './services-list/services-list.component';
import { OrderListComponent } from './order-list/order-list.component';
import { DoctorModalComponent } from './doctor-modal/doctor-modal.component';
import { AppointmentModalComponent } from './appointment-modal/appointment-modal.component';
import { BookingServicesModalComponent } from './booking-services-modal/booking-services-modal.component';
import { AppoinmentListComponent } from './appoinment-list/appoinment-list.component';



@NgModule({
  declarations: [
    DashboardComponent,
    AddDoctorComponent,
    AddReviewComponent,
    AddMediServiceComponent,
    AllReviewComponent,
    ReviewModalComponent,
    AllMediServicesComponent,
    MediServicesModalComponent,
    BestDoctorComponent,
    BestServicesComponent,
    DoctorListComponent,
    ServicesListComponent,
    OrderListComponent,
    DoctorModalComponent,
    AppointmentModalComponent,
    BookingServicesModalComponent,
    AppoinmentListComponent
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
    AddMediServiceComponent,
    AllReviewComponent,
    ReviewModalComponent,
    AllMediServicesComponent,
    MediServicesModalComponent,
    BestDoctorComponent,
    BestServicesComponent,
    DoctorListComponent,
    ServicesListComponent,
    OrderListComponent,
    DoctorModalComponent,
    AppointmentModalComponent,
    BookingServicesModalComponent,
    AppoinmentListComponent
  ]

})
export class DashboardModule { }
