import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { StaffService } from '../shared/staff.service';
import { Flight } from '../shared/flight.model';

@Component({
<<<<<<< HEAD
    selector: 'app-staff',
    templateUrl: './staff.component.html',
    styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit, OnDestroy {
    selectedFlightId?: number;
    selectedFlight?: Flight;
    flightSubscription?: Subscription;
    moduleName = '';

    constructor(
        private staffService: StaffService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.flightSubscription = this.staffService.flightIdChanged.subscribe((index) => {
            this.selectedFlightId = index;
            this.selectedFlight = this.staffService.Flights[index];
            this.activatedRoute.url.subscribe((value) => {
                value ? this.moduleName = value[0].path : this.moduleName = 'staff'
            });
        });
    }

    ngOnDestroy() {
        this.flightSubscription?.unsubscribe();
    }
}
=======
    selector: 'app-staff',
    templateUrl: './staff.component.html'
    //styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit, OnDestroy {
    selectedFlightId?: number;
    selectedFlight?: Flight;
    flightSubscription?: Subscription;
    moduleName = '';

    constructor(
        private staffService: StaffService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.flightSubscription = this.staffService.flightIdChanged.subscribe((index) => {
            this.selectedFlightId = index;
            this.selectedFlight = this.staffService.Flights[index];
            this.activatedRoute.url.subscribe((value) => {
                value ? (this.moduleName = value[0].path) : (this.moduleName = 'staff');
            });
        });
    }

    ngOnDestroy() {
        this.flightSubscription?.unsubscribe();
    }
}
>>>>>>> 997f8ec91f9e1cbd54fdc4920c39ca44f314f432
