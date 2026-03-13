import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { User } from './user.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

interface ResponseData {
<<<<<<< HEAD
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
}

interface newUser {
    email: string;
    role: string;
=======
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
}

interface newUser {
    email: string;
    role: string;
>>>>>>> 997f8ec91f9e1cbd54fdc4920c39ca44f314f432
}

@Injectable({ providedIn: 'root' })
export class AuthService {
<<<<<<< HEAD
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private tokenExpirationTimer: any;

    constructor(private http: HttpClient, private router: Router) {}

    user = new BehaviorSubject<User | null>(null);

    signUp(email: string, password: string) {
        return this.http
            .post<ResponseData>(
                'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA26fPsFBtcTi1JGRLHFgCVJk4trCxAD0c',
                {
                    email: email,
                    password: password,
                    returnSecureToken: true
                }
            )
            .pipe(
                tap((respData) => {
                    const expireDate = new Date(
                        new Date().getTime() + +respData['expiresIn'] * 1000
                    );
                    const user = new User(
                        respData['email'],
                        respData['localId'],
                        respData['idToken'],
                        expireDate,
                        'staff'
                    );
                    this.user.next(user);
                })
            );
    }

    async login(email: string, password: string): Promise<Observable<ResponseData>> {
        let userRole = '';
        await this.getUserRole(email).then((role) => {
            userRole = role;
        });
          return this.http
              .post<ResponseData>(
                  'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA26fPsFBtcTi1JGRLHFgCVJk4trCxAD0c',
                  {
                      email: email,
                      password: password,
                      returnSecureToken: true
                  }
              )
              .pipe(
                  tap((respData) => {
                      const expireDate = new Date(
                          new Date().getTime() + +respData['expiresIn'] * 1000
                      );
                      const user = new User(
                          respData['email'],
                          respData['localId'],
                          respData['idToken'],
                          expireDate,
                          userRole
                      );
                      this.user.next(user);
                      this.autoLogOut(+respData['expiresIn'] * 1000);
                      localStorage.setItem('user', JSON.stringify(user));
                  })
              );
    }

    async getUserRole(email: string) {
        const users: newUser[] = await this.http
            .get<newUser[]>(
                'https://angularproject-2e085-default-rtdb.firebaseio.com/users.json'
            )
            .toPromise();
        let userRole = '';
        if(users.filter((a) => a.email == email)[0]) {
          userRole = users.filter((a) => a.email == email)[0].role;
        }
        return userRole;
    }

    async addUser(userEmail: string) {
        const users: newUser[] = await this.http
            .get<newUser[]>(
                'https://angularproject-2e085-default-rtdb.firebaseio.com/users.json'
            )
            .toPromise();
        const user: newUser = { email: userEmail, role: 'staff' };
        users.push(user);
        this.http
            .put<newUser[]>(
                'https://angularproject-2e085-default-rtdb.firebaseio.com/users.json',
                users
            )
            .subscribe(() => {
                //console.log(response);
            });
    }

    autoLogin() {
        const userlogged = localStorage.getItem('user');
        if (!userlogged) {
            return;
        }
        const user = JSON.parse(userlogged);
        const loggedUser = new User(
            user['email'],
            user['id'],
            user['_token'],
            user['_tokenExpire'],
            user['userRole']
        );
        this.user.next(loggedUser);
        const expirationTime =
            new Date(user['_tokenExpire']).getTime() - new Date().getTime();
        this.autoLogOut(expirationTime);
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    gmailLogin(email: string, password: string) {
        return this.http
            .post(
                'https://identitytoolkit.googleapis.com/v1/accounts:signInWithIdp?key=AIzaSyA26fPsFBtcTi1JGRLHFgCVJk4trCxAD0c',
                {
                    //178415100392-6m72jh4skhuk5o6n6sikn8ahrejjlfjc.apps.googleusercontent.com
                    postBody: 'id_token=CmjS2Ca61ktQi7rYSk-kaxAi&providerId=google.com',
                    requestUri: 'http://localhost:4200/checkin',
                    returnIdpCredential: true,
                    returnSecureToken: true
                }
            )
            .pipe(
                tap((respData) => {
                    console.log(respData);
                    // const expireDate = new Date(new Date().getTime() + +respData['expiresIn'] * 1000);
                    // const user = new User(respData['email'],respData['localId'],respData['idToken'],expireDate);
                    // this.user.next(user);
                    // this.autoLogOut(+respData['expiresIn'] * 1000)
                    // localStorage.setItem('user',JSON.stringify(user))
                })
            );
    }

    logOut() {
        this.user.next(null);
        localStorage.removeItem('user');
        if (this.tokenExpirationTimer) {
            clearTimeout(this.tokenExpirationTimer);
        }
        this.tokenExpirationTimer = null;
        this.router.navigate(['auth']);
    }

    autoLogOut(expirationDuration: number) {
        this.tokenExpirationTimer = setTimeout(() => {
            this.logOut();
        }, expirationDuration);
    }
}
=======
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private tokenExpirationTimer: any;

    constructor(private http: HttpClient, private router: Router) {}

    user = new BehaviorSubject<User | null>(null);

    signUp(email: string, password: string) {
        return this.http
            .post<ResponseData>(
                'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA26fPsFBtcTi1JGRLHFgCVJk4trCxAD0c',
                {
                    email: email,
                    password: password,
                    returnSecureToken: true
                }
            )
            .pipe(
                tap((respData) => {
                    const expireDate = new Date(
                        new Date().getTime() + +respData['expiresIn'] * 1000
                    );
                    const user = new User(
                        respData['email'],
                        respData['localId'],
                        respData['idToken'],
                        expireDate,
                        'staff'
                    );
                    this.user.next(user);
                })
            );
    }

    async login(email: string, password: string): Promise<Observable<ResponseData>> {
        let userRole = '';
        await this.getUserRole(email).then((role) => {
            userRole = role;
        });
        return this.http
            .post<ResponseData>(
                'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA26fPsFBtcTi1JGRLHFgCVJk4trCxAD0c',
                {
                    email: email,
                    password: password,
                    returnSecureToken: true
                }
            )
            .pipe(
                tap((respData) => {
                    const expireDate = new Date(
                        new Date().getTime() + +respData['expiresIn'] * 1000
                    );
                    const user = new User(
                        respData['email'],
                        respData['localId'],
                        respData['idToken'],
                        expireDate,
                        userRole
                    );
                    this.user.next(user);
                    this.autoLogOut(+respData['expiresIn'] * 1000);
                    localStorage.setItem('user', JSON.stringify(user));
                })
            );
    }

    async getUserRole(email: string) {
        const users: newUser[] = await this.http
            .get<newUser[]>(
                'https://angularproject-2e085-default-rtdb.firebaseio.com/users.json'
            )
            .toPromise() as newUser[];
        let userRole = '';
        if (users.filter((a) => a.email == email)[0]) {
            userRole = users.filter((a) => a.email == email)[0].role;
        }
        return userRole;
    }

    async addUser(userEmail: string) {
        const users: newUser[] = await this.http
            .get<newUser[]>(
                'https://angularproject-2e085-default-rtdb.firebaseio.com/users.json'
            )
            .toPromise() as newUser[];
        const user: newUser = { email: userEmail, role: 'staff' };
        users.push(user);
        this.http
            .put<newUser[]>(
                'https://angularproject-2e085-default-rtdb.firebaseio.com/users.json',
                users
            )
            .subscribe(() => {
                //console.log(response);
            });
    }

    autoLogin() {
        const userlogged = localStorage.getItem('user');
        if (!userlogged) {
            return;
        }
        const user = JSON.parse(userlogged);
        const loggedUser = new User(
            user['email'],
            user['id'],
            user['_token'],
            user['_tokenExpire'],
            user['userRole']
        );
        this.user.next(loggedUser);
        const expirationTime =
            new Date(user['_tokenExpire']).getTime() - new Date().getTime();
        this.autoLogOut(expirationTime);
    } // eslint-disable-next-line @typescript-eslint/no-unused-vars

    gmailLogin(email: string, password: string) {
        return this.http
            .post(
                'https://identitytoolkit.googleapis.com/v1/accounts:signInWithIdp?key=AIzaSyA26fPsFBtcTi1JGRLHFgCVJk4trCxAD0c',
                {
                    //178415100392-6m72jh4skhuk5o6n6sikn8ahrejjlfjc.apps.googleusercontent.com
                    postBody: 'id_token=CmjS2Ca61ktQi7rYSk-kaxAi&providerId=google.com',
                    requestUri: 'http://localhost:4200/checkin',
                    returnIdpCredential: true,
                    returnSecureToken: true
                }
            )
            .pipe(
                tap((respData) => {
                    console.log(respData); // const expireDate = new Date(new Date().getTime() + +respData['expiresIn'] * 1000); // const user = new User(respData['email'],respData['localId'],respData['idToken'],expireDate); // this.user.next(user); // this.autoLogOut(+respData['expiresIn'] * 1000) // localStorage.setItem('user',JSON.stringify(user))
                })
            );
    }

    logOut() {
        this.user.next(null);
        localStorage.removeItem('user');
        if (this.tokenExpirationTimer) {
            clearTimeout(this.tokenExpirationTimer);
        }
        this.tokenExpirationTimer = null;
        this.router.navigate(['auth']);
    }

    autoLogOut(expirationDuration: number) {
        this.tokenExpirationTimer = setTimeout(() => {
            this.logOut();
        }, expirationDuration);
    }
}
>>>>>>> 997f8ec91f9e1cbd54fdc4920c39ca44f314f432
