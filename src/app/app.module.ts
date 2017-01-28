import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { FireService } from './providers/fire.service'

import { ReversePipe } from './pipes/reverse';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InboxComponent } from './components/inbox/inbox.component';

export const firebaseConfig = {
    apiKey: "AIzaSyBzr-WAxz6uWy_2Dam52P2HXVzH6JQEjHM",
    authDomain: "chat-app-eb5b6.firebaseapp.com",
    databaseURL: "https://chat-app-eb5b6.firebaseio.com",
    storageBucket: "chat-app-eb5b6.appspot.com",
    messagingSenderId: "758779658895"
};


const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    
    { path: 'dashboard', component: DashboardComponent },
    { path: 'inbox', component: InboxComponent },   

    { path: '**', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    InboxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FireService],
  bootstrap: [AppComponent]
})
export class AppModule { }
