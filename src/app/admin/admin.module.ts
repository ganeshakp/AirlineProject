
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { PassengerMasterComponent } from './passengers/passengerMaster.component';
import { ServicesComponent } from './services/services.component';
import { PassengerMasterFilterPipe } from './passengers/passenger-master-filter.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
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