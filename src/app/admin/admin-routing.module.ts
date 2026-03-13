import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ServicesComponent } from './services/services.component';
import { PassengerMasterComponent } from './passengers/passengerMaster.component';

const routes: Routes = [
<<<<<<< HEAD
    {
        path: '',
        component: AdminComponent,
        children: [
            { path: '', redirectTo: '/admin', pathMatch: 'full' },
            { path: ':id/services', component: ServicesComponent },
            { path: ':id/passengersMaster', component: PassengerMasterComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
=======
    {
        path: '',
        component: AdminComponent,
        children: [
            { path: '', redirectTo: '/admin', pathMatch: 'full' },
            { path: ':id/services', component: ServicesComponent },
            { path: ':id/passengersMaster', component: PassengerMasterComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
>>>>>>> 997f8ec91f9e1cbd54fdc4920c39ca44f314f432
})
export class AdminRoutingModule {}
