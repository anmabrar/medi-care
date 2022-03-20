import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutUsComponent } from './components/about-us/about-us.component';
import { AllDoctorComponent } from './components/all-doctor/all-doctor.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { HomeComponent } from './components/home/home.component';
import { MediServiceComponent } from './components/medi-service/medi-service.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { LoginComponent } from './user-auth/login/login.component';
import { RegisterComponent } from './user-auth/register/register.component';

const routes: Routes = [
  { path : '', redirectTo:'/home',pathMatch:"full"},
  { path :'home', component : HomeComponent},
  { path :'service', component : MediServiceComponent},
  { path :'doctor', component : AllDoctorComponent},
  { path :'about', component : AboutUsComponent},
  { path :'dashboard', component : DashboardComponent},
  { path :'login', component : LoginComponent},
  { path :'register', component : RegisterComponent},
  { path : '**', component : NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
