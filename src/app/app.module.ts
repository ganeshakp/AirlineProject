import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { environment } from '../environments/environment';
=======
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';
>>>>>>> 997f8ec91f9e1cbd54fdc4920c39ca44f314f432

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
<<<<<<< HEAD
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({ declarations: [
        AppComponent,
        HeaderComponent
    ],
    exports: [],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
            // Register the ServiceWorker as soon as the app is stable
            // or after 30 seconds (whichever comes first).
            registrationStrategy: 'registerWhenStable:10000'
        })], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule {}
=======

@NgModule({
    declarations: [AppComponent, HeaderComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
          enabled: environment.production,
          // Register the ServiceWorker as soon as the application is stable
          // or after 30 seconds (whichever comes first).
          registrationStrategy: 'registerWhenStable:30000'
        }),
        // ServiceWorkerModule.register('ngsw-worker.js', {
        //     enabled: environment.production, // Register the ServiceWorker as soon as the app is stable // or after 30 seconds (whichever comes first).
        //     registrationStrategy: 'registerWhenStable:10000'
        // })
    ],
    exports: [],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
>>>>>>> 997f8ec91f9e1cbd54fdc4920c39ca44f314f432
