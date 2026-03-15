import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,OnDestroy {
    collapsed = true;
    userValid = false;
    userRole = '';
    userSubscription : Subscription | undefined;
    constructor(private authService: AuthService) {}

    ngOnInit(): void {
        this.userSubscription = this.authService.user.subscribe((user) => {
            if (user && user.userRole) {
                this.userValid = true;
                this.userRole = user.userRole;
            } else {
                this.userValid = false;
                this.userRole = '';
            }
        });
    }

    toggleCollapsed(): void {
        this.collapsed = !this.collapsed;
    }

    onLogOut() {
        this.authService.logOut();
    }

    ngOnDestroy() {
      this.userSubscription?.unsubscribe();
    }
}
