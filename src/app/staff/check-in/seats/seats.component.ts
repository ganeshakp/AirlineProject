
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Flight } from 'src/app/shared/flight.model';
import { Passenger } from 'src/app/shared/passenger.model';
import { StaffService } from 'src/app/shared/staff.service';

@Component({
    selector: 'app-seats',
    templateUrl: './seats.component.html',
    styleUrls: ['./seats.component.scss']
})
export class SeatsComponent implements OnInit, OnDestroy {
    firstCoulmn?: number[];
    secondCoulmn?: number[];
    flights: Flight[] = [];
    id?: number;
    selectedFlight?: Flight;
    seatId?: number;
    seats?: Passenger[];
    checkedInBg = false;
    passenger?: Passenger;
    moduleName?: string;
    alertMessage = ''
    flightSubscription?: Subscription;
    flightDetail?: Subscription;

    constructor(
        private staffService: StaffService,
        private activatedRoute: ActivatedRoute,
        private router : Router
    ) {}

    async ngOnInit(): Promise<void> {
        this.firstCoulmn = Array(10)
            .fill(1)
            .map((x, i) => i + 1);
        this.secondCoulmn = Array(10)
            .fill(1)
            .map((x, i) => i + 11);
        this.flights = await (this.staffService.getAllFlights()) as unknown as Flight[] ;
        this.activatedRoute.params.subscribe((params: Params) => {
            this.id = +params['id'];
            this.selectedFlight = this.flights[this.id];
            if (this.selectedFlight?.hasOwnProperty('seats')) {
              this.seats = this.selectedFlight.seats ? this.selectedFlight.seats : [];
            } else {
              this.seats = []
            }
            this.activatedRoute.parent?.url.subscribe((value) => {
                this.moduleName = value[0].path;
            });
        });
        this.flightSubscription = this.staffService.flightIdChanged.subscribe((index) => {
            if (this.router.url.indexOf('seats') != -1) {
              this.router.navigate(['staff','checkin',index, 'seats']);
          }
        });
        this.flightDetail = this.staffService.flightDetailsChanged.subscribe((flights) => {
            this.flights = flights;
            this.alertMessage = 'Check in details saved successfully'
        });
    }

    //for check-in/check-out
    onSeatClick(seatnumber: number) {
        this.seatId = seatnumber;
        if (this.seats) {
            const passenger: Passenger = this.seats.filter(
                (seat) => seat.seatNo === this.seatId
            )[0];
            if (passenger) {
                passenger.name ? (passenger.checkedIn = !passenger.checkedIn) : false;
                this.checkedInBg = passenger.checkedIn;
            }
        }
    }

    onSeatHover(seatnumber: number) {
        this.seatId = seatnumber;
        if (this.seats) {
            this.passenger = (this.seats?.filter(
                (seat) => seat.seatNo === this.seatId
            ))[0];
        }
    }

    checkInBg(seatnumber: number) {
        this.seatId = seatnumber;
        if (this.seats) {
            const passenger: Passenger = this.seats.filter(
                (seat) => seat.seatNo === this.seatId
            )[0];
            if (passenger) {
                return passenger.checkedIn
                    ? { 'background-color': '#6dc665', cursor: 'pointer' }
                    : { 'background-color': 'transparent', cursor: 'pointer' };
            }
        }

        return { 'background-color': 'transparent', cursor: 'not-allowed' };
    }

    getSeatImage(seatId: number) {
        this.seatId = seatId;
        let imgSource = '../../../../../assets/Armchair.png';
        if (this.seats) {
            const passenger: Passenger = this.seats.filter(
                (seat) => seat.seatNo === this.seatId
            )[0];
            if (passenger) {
                if (passenger.splRequest == 'WheelChair') {
                    imgSource = '../../../../../assets/WheelChair.png';
                } else if (passenger.splRequest == 'Infant') {
                    imgSource = '../../../../../assets/Infant.png';
                } else {
                    imgSource = '../../../../../assets/Passenger.png';
                }
            }
        }
        return imgSource;
    }

    confirmAllChanges() {
        const flights = this.flights;
        this.staffService.saveFlights(flights);
    }

    onClosed() {
      this.alertMessage = ''
    }

    ngOnDestroy() {
        this.flightSubscription?.unsubscribe();
        this.flightDetail?.unsubscribe();
    }
}
