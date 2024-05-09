import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './Shared/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire/compat';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AngularFireModule.initializeApp({"projectId":"webfejlesztes-ekszerbolt","appId":"1:606010029637:web:a820ebb7e60da2322d152c","storageBucket":"webfejlesztes-ekszerbolt.appspot.com","apiKey":"AIzaSyAwWe1eGmo7aKqQ7T2xmzMnF0HEOTNxkt4","authDomain":"webfejlesztes-ekszerbolt.firebaseapp.com","messagingSenderId":"606010029637"}),
    //provideFirebaseApp(() => initializeApp({"projectId":"webfejlesztes-ekszerbolt","appId":"1:606010029637:web:a820ebb7e60da2322d152c","storageBucket":"webfejlesztes-ekszerbolt.appspot.com","apiKey":"AIzaSyAwWe1eGmo7aKqQ7T2xmzMnF0HEOTNxkt4","authDomain":"webfejlesztes-ekszerbolt.firebaseapp.com","messagingSenderId":"606010029637"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
