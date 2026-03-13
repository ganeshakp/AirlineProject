
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Flight } from '../shared/flight.model';
import { Subscription } from 'rxjs';
import { AdminService } from './admin.service';
import { StaffService } from '../shared/staff.service';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit,OnDestroy {
    selectedFlightId?: number;
    selectedFlight?: Flight;
    flightSubscription?: Subscription;
    moduleName = '';

    constructor(private adminService: AdminService, private staffService: StaffService) {}

    ngOnInit(): void {
        this.flightSubscription = this.staffService.flightIdChanged.subscribe((index) => {
            this.selectedFlightId = index;
            this.selectedFlight = this.staffService.Flights[index];
        });
    }

    ngOnDestroy() {
      this.flightSubscription?.unsubscribe();
    }
}
