import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight.model';
import { StaffService } from '../staff.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-flights',
    templateUrl: './flights.component.html',
    styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit {
    flights: Flight[] = [];
    selectedFlight?: Flight;
    selectedFlightId?: number;
    moduleName?: string;

    constructor(
        private router: Router,
        private staffService: StaffService
    ) {}

    async ngOnInit(): Promise<void> {
        this.flights = await this.staffService.getAllFlights();
        const url = this.router.url.split('/');
        if(url.length > 2) {
          url[1] === 'admin' ? this.onFlightSelect(+url[2]) : this.onFlightSelect(+url[3])
        }
    }

    onFlightSelect(index: number) {
        this.selectedFlightId = index;
        this.staffService.flightIdChanged.next(this.selectedFlightId);
    }
}