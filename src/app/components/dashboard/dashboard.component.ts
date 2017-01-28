import { Component, OnInit } from '@angular/core';
import { FireService } from '../../providers/fire.service';
import { PreloadingStrategy, Route, Router } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    constructor(private fs: FireService, private router: Router) { }

    ngOnInit() {
        this.users = this.fs.getList('users');
    }
    users;

}
