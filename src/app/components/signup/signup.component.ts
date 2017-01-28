import { Component, OnInit } from '@angular/core';
import { FireService } from '../../providers/fire.service';
import { PreloadingStrategy, Route, Router } from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

    constructor(private fs: FireService, private router: Router) { }

    ngOnInit() {
    }

    data = {
        name: "",
        email: "",
        password: "",
        role: "user"
    }
    signup() {
        console.log(this.data);
        this.fs.doSignup(this.data.email, this.data.password)
            .catch((error: any) => {
                alert(error);
                console.log(error);
            })
            .then(user => {
                console.log("user logged in: ", user);
                if (user != undefined) {
                    console.log("user created");
                    this.fs.setData("users/" + user.uid, {
                        name: this.data.name,
                        email: user.auth.email,
                        role: this.data.role
                    })
                        .catch(error => {
                            console.log("Error is: ", error);
                        })
                        .then(data => {
                            this.router.navigate(['/login']);
                        });
                }
            })
    }

}
