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
    apiKey: "AIzaSyBRS53Y6Wtm8YQX8ZQIdBIeQVhznsMQ-2c",
    authDomain: "auction-169e0.firebaseapp.com",
    databaseURL: "https://auction-169e0.firebaseio.com",
    storageBucket: "auction-169e0.appspot.com",
    messagingSenderId: "929213999268"
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
        InboxComponent,
        ReversePipe
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
