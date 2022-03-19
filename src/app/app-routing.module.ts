import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './user-auth/login/login.component';
import { RegisterComponent } from './user-auth/register/register.component';

const routes: Routes = [
  { path : '', redirectTo:'/home',pathMatch:"full"},
  { path :'home', component : HomeComponent},
  { path :'login', component : LoginComponent},
  { path :'register', component : RegisterComponent},
  { path : '**', component : NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
