import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
//firebase
import { environment } from 'src/environments/environment';
import { provideFirebaseApp, initializeApp} from '@angular/fire/app'
import { provideFirestore, getFirestore} from '@angular/fire/firestore'
import { provideAuth,getAuth } from '@angular/fire/auth';


import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// module 
import { UserAuthModule } from './user-auth/user-auth.module';

//components
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutUsComponent } from './components/about-us/about-us.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    FooterComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    UserAuthModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth())
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
