import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
//firebase
import { AngularFireModule} from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';
import { provideFirebaseApp, initializeApp} from '@angular/fire/app'
import { provideFirestore, getFirestore} from '@angular/fire/firestore'
import { provideAuth,getAuth } from '@angular/fire/auth';

//bootstrap & froms
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

// module 
import { UserAuthModule } from './user-auth/user-auth.module';
import { DashboardModule } from './dashboard/dashboard.module';

//components
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MediServiceComponent } from './components/medi-service/medi-service.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { AllDoctorComponent } from './components/all-doctor/all-doctor.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    FooterComponent,
    AboutUsComponent,
    HomeComponent,
    NotFoundComponent,
    MediServiceComponent,
    DoctorComponent,
    AllDoctorComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    FontAwesomeModule,
    UserAuthModule,
    DashboardModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    AngularFireDatabaseModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
