
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
    constructor(private authService: AuthService, private router: Router) {}

    loginMode = true;
    isLoading = false;
    error = undefined;
    gmailLogin = false;
    userRole = '';

    onClosed() {
        this.error = undefined;
    }

    onSwitchMode(): void {
        this.loginMode = !this.loginMode;
    }

    async onAuthSubmit(authForm: NgForm): Promise<void> {
        if (!authForm.valid) {
            return;
        }

        this.isLoading = true;
        const email = authForm.value.email;
        const password = authForm.value.password;

        if (!this.gmailLogin) {
            if (this.loginMode) {
                (await this.authService.login(email, password)).subscribe(
                    () => {
                        this.isLoading = false;
                        this.router.navigate(['staff']);
                    },
                    (error) => {
                        this.isLoading = false;
                        this.error = error.error.error.message;
                    }
                );
            } else {
                this.authService.signUp(email, password).subscribe(
                    () => {
                        this.authService.addUser(email);
                        this.router.navigate(['staff']);
                    },
                    (error) => {
                        this.error = error.error.error.message;
                    }
                );
            }
        } else {
            this.authService.gmailLogin(email, password).subscribe(
                () => {
                    this.router.navigate(['staff']);
                },
                (error) => {
                    this.error = error.error.error.message;
                }
            );
        }

        this.isLoading = false;
        authForm.reset();
    }
}