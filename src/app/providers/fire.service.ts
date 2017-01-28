import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';
import { PreloadingStrategy, Route, Router } from '@angular/router';
import * as firebase from 'firebase';

@Injectable()
export class FireService {


    storageRef;

    constructor(private af: AngularFire, private router: Router) {
        console.log("Fire Service initialized");

        this.storageRef = firebase.storage().ref().child("images");

    }

    uploadImage(file) {
        console.log("base 64 data: ", file);

        this.storageRef.put(file)
            .then((snapshot) => {
                console.log("image uplad ", snapshot.downloadURL);
                this.storageRef.getDownloadURL()
                    .then(url => {
                        console.log("image url after = " + url);

                    });
            })
    }

    //     uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, function (snapshot) {
    //                 // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    //                 var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //                 console.log('Upload is ' + progress + '% done');
    //                 switch (snapshot.state) {
    //                     case firebase.storage.TaskState.PAUSED: // or 'paused'
    //                         console.log('Upload is paused');
    //                         break;
    //                     case firebase.storage.TaskState.RUNNING: // or 'running'
    //                         console.log('Upload is running');
    //                         break;
    //                 }
    //             }, function (error) {
    //                 switch (error.code) {
    //                     case 'storage/unauthorized':
    //                         // User doesn't have permission to access the object
    //                         break;
    //                     case 'storage/canceled':
    //                         // User canceled the upload
    //                         break;
    //                     case 'storage/unknown':
    //                         // Unknown error occurred, inspect error.serverResponse
    //                         break;
    //                 }
    //             }, function () {
    //                 // Upload completed successfully, now we can get the download URL
    //                 var downloadURL = uploadTask.snapshot.downloadURL;
    //                 console.log("this is result: ", uploadTask.snapshot);
    //             });


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
