import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';
import { PreloadingStrategy, Route, Router } from '@angular/router';
import * as firebase from 'firebase';

@Injectable()
export class FireService {

    constructor(private af: AngularFire, private router: Router) {
        console.log("Fire Service initialized");
    }

    doLogin(email, password) {
        return this.af.auth.login(
            {
                email: email,
                password: password
            },
            {
                provider: AuthProviders.Password,
                method: AuthMethods.Password,
            }).catch((error: any) => {
                console.log(error);
                alert(error.code);
            })
    }
    doSignup(email, password) {
        return this.af.auth.createUser({ email: email, password: password })
    }
    setData(path, data): firebase.Promise<void> {
        return this.af.database.object('/' + path).set(data);
    }
    getData(path) {
        return this.af.database.object('/' + path);
    }
    getList(path, options?) {
        return this.af.database.list('/' + path, options);
    }
    pushData(path, data): firebase.Promise<void> {
        return this.af.database.list('/' + path).push(data);
    }
    getDate() {
        return firebase.database.ServerValue.TIMESTAMP;
    }
    getUser() {
        return this.af.auth;
    }
    logout() {
        this.af.auth.logout();
        this.router.navigate(['/login']);
    }
}
