import { Component, OnInit } from '@angular/core';
import { FireService } from '../../providers/fire.service';
import { PreloadingStrategy, Route, Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(private fs: FireService, private router: Router) { }

    ngOnInit() {
    }
    data = {
        email: "",
        password: "",
    }

    login() {
        console.log(this.data);
        this.fs.doLogin(this.data.email, this.data.password)
            .catch((error: any) => {
                alert(error.code);
                console.log(error);
            })
            .then((user) => {
                console.log("user: ", user);
                if (user)
                    this.router.navigate(['/dashboard']);

            });
    }
}
