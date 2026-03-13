<<<<<<< HEAD

=======
>>>>>>> 997f8ec91f9e1cbd54fdc4920c39ca44f314f432
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FlightsComponent } from './flights/flights.component';
import { DropdownDirective } from './dropdown.directive';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
<<<<<<< HEAD
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AlertComponent } from './alert/alert.component';

@NgModule({ declarations: [FlightsComponent, DropdownDirective, LoadingSpinnerComponent, AlertComponent],
=======
import { HttpClientModule } from '@angular/common/http';
import { AlertComponent } from './alert/alert.component';

@NgModule({
    declarations: [
        FlightsComponent,
        DropdownDirective,
        LoadingSpinnerComponent,
        AlertComponent
    ],
    imports: [
        RouterModule.forChild([{ path: 'flights', component: FlightsComponent }]),
        FormsModule,
        CommonModule,
        HttpClientModule
    ],
>>>>>>> 997f8ec91f9e1cbd54fdc4920c39ca44f314f432
    exports: [
        RouterModule,
        FormsModule,
        CommonModule,
        FlightsComponent,
        AlertComponent,
        DropdownDirective,
<<<<<<< HEAD
        LoadingSpinnerComponent
    ], imports: [
        FormsModule,
        CommonModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class SharedModule {}
=======
        LoadingSpinnerComponent,
        HttpClientModule
    ]
})
export class SharedModule {}
>>>>>>> 997f8ec91f9e1cbd54fdc4920c39ca44f314f432
