import { NgModule } from '@angular/core';
import { StaffComponent } from './staff.component';
import { SeatsComponent } from './check-in/seats/seats.component';
import { PassengersComponent } from './check-in/passengers/passengers.component';
import { PassengerFilterPipe } from './check-in/passengers/passenger-filter.pipe';
import { InFlightComponent } from './in-flight/in-flight.component';
import { SharedModule } from '../shared/shared.module';
import { StaffRoutingModule } from './staff-routing.module';

@NgModule({
<<<<<<< HEAD
    declarations: [
        StaffComponent,
        SeatsComponent,
        PassengersComponent,
        PassengerFilterPipe,
        InFlightComponent
    ],
    imports: [SharedModule, StaffRoutingModule],
    exports: [
        StaffComponent,
        SeatsComponent,
        PassengersComponent,
        PassengerFilterPipe,
        InFlightComponent
    ]
})
export class StaffModule {}
=======
    declarations: [
        StaffComponent,
        SeatsComponent,
        PassengersComponent,
        PassengerFilterPipe,
        InFlightComponent
    ],
    imports: [SharedModule, StaffRoutingModule],
    exports: [
        StaffComponent,
        SeatsComponent,
        PassengersComponent,
        PassengerFilterPipe,
        InFlightComponent
    ]
})
export class StaffModule {}
>>>>>>> 997f8ec91f9e1cbd54fdc4920c39ca44f314f432
