import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutUsComponent } from './components/about-us/about-us.component';
import { AllDoctorComponent } from './dashboard/all-doctor/all-doctor.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { LoginComponent } from './user-auth/login/login.component';
import { RegisterComponent } from './user-auth/register/register.component';
import { AllMediServicesComponent } from './dashboard/all-medi-services/all-medi-services.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path : '', redirectTo:'/home',pathMatch:"full"},
  { path :'home', component : HomeComponent},
  { path :'services', component : AllMediServicesComponent},
  { path :'doctor', component : AllDoctorComponent},
  { path :'about', component : AboutUsComponent},
  { path :'dashboard', component : DashboardComponent, canActivate :[AuthGuard]},
  { path :'login', component : LoginComponent},
  { path :'register', component : RegisterComponent},
  { path : '**', component : NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
