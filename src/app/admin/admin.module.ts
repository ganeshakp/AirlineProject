<<<<<<< HEAD

=======
>>>>>>> 997f8ec91f9e1cbd54fdc4920c39ca44f314f432
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { PassengerMasterComponent } from './passengers/passengerMaster.component';
import { ServicesComponent } from './services/services.component';
import { PassengerMasterFilterPipe } from './passengers/passenger-master-filter.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
<<<<<<< HEAD
    declarations: [
        AdminComponent,
        PassengerMasterComponent,
        ServicesComponent,
        PassengerMasterFilterPipe
    ],
    imports: [ReactiveFormsModule, SharedModule, AdminRoutingModule],
    exports: [
        AdminComponent,
        PassengerMasterComponent,
        ServicesComponent,
        PassengerMasterFilterPipe
    ]
})
export class AdminModule {}
=======
    declarations: [
        AdminComponent,
        PassengerMasterComponent,
        ServicesComponent,
        PassengerMasterFilterPipe
    ],
    imports: [ReactiveFormsModule, SharedModule, AdminRoutingModule],
    exports: [
        AdminComponent,
        PassengerMasterComponent,
        ServicesComponent,
        PassengerMasterFilterPipe
    ]
})
export class AdminModule {}
>>>>>>> 997f8ec91f9e1cbd54fdc4920c39ca44f314f432
