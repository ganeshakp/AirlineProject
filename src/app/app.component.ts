import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
<<<<<<< HEAD
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'AirlineProject';

    constructor(private authService: AuthService) {}

    ngOnInit(): void {
        this.authService.autoLogin();
    }
}
=======
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'AirlineProject';

    constructor(private authService: AuthService) {}

    ngOnInit(): void {
        this.authService.autoLogin();
    }
}
>>>>>>> 997f8ec91f9e1cbd54fdc4920c39ca44f314f432
