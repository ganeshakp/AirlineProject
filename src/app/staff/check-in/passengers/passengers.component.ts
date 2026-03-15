
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Flight } from 'src/app/shared/flight.model';
import { Passenger } from 'src/app/shared/passenger.model';
import { StaffService } from 'src/app/shared/staff.service';

@Component({
    selector: 'app-passengers',
    templateUrl: './passengers.component.html',
    styleUrls: ['./passengers.component.scss']
})
export class PassengersComponent implements OnInit, OnDestroy {
    id?: number;
    selectedFlight?: Flight;
    selectedPassenger?: Passenger;
    selectedPassengerId?: number;
    filterText = '';
    seatChangeConfirm = false;
    newSeatSelected = 0;
    passengers?: Passenger[] = [];
    emptySeats: number[] = Array(20)
        .fill(1)
        .map((x, i) => i + 1);
    flightSubscription?: Subscription;

    constructor(
        private staffService: StaffService,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(async (params: Params) => {
            this.selectedPassenger = undefined;
            this.id = +params['id'];
            const flights =
                (await this.staffService.getAllFlights()) as unknown as Flight[];
            this.selectedFlight = flights[this.id];
            if (this.selectedFlight?.hasOwnProperty('seats')) {
                this.passengers = (
                    this.selectedFlight.seats ? this.selectedFlight.seats : []
                ).sort((a, b) => (a.seatNo > b.seatNo ? 1 : -1));
            } else {
              this.passengers = []
            }
            const filledSeats = this.passengers?.map((passenger) => passenger.seatNo);
            this.emptySeats = this.emptySeats.filter(
                (seat) => !filledSeats?.includes(seat)
            );
            this.newSeatSelected = 0;
        });
        this.flightSubscription = this.staffService.flightIdChanged.subscribe((index) => {
            if (this.router.url.indexOf('passengers') != -1) {
                this.router.navigate(['staff','checkin', index, 'passengers']);
            }
        });
    }

    onChangeSeatClick(oldSeatNumber: number, newSeatNumber: number) {
        if (newSeatNumber == 0 && this.seatChangeConfirm) {
            alert('Please select a seat');
            return;
        }
        if (this.seatChangeConfirm) {
            if (this.selectedPassenger && this.id != null && this.passengers) {
                this.staffService.passengerSeatChange(
                    this.id,
                    oldSeatNumber,
                    newSeatNumber
                );
            }
        }
        this.seatChangeConfirm = !this.seatChangeConfirm;
    }

    ngOnDestroy() {
        this.flightSubscription?.unsubscribe();
    }
}