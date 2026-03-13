
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

import { Flight } from 'src/app/shared/flight.model';
import { Passenger } from 'src/app/shared/passenger.model';
import { StaffService } from 'src/app/shared/staff.service';

@Component({
    selector: 'app-in-flight',
    templateUrl: './in-flight.component.html',
    styleUrls: ['./in-flight.component.scss']
})
export class InFlightComponent implements OnInit, OnDestroy {
    firstCoulmn?: number[];
    secondCoulmn?: number[];
    id?: number;
    selectedFlight?: Flight;
    seatId?: number;
    seats?: Passenger[];
    checkedInBg = false;
    passenger?: Passenger;
    moduleName?: string;
    seatClicked?: number;
    ancillaryServices: string[] = [];
    shoppingList: string[] = [];
    flightSubscription?: Subscription;
    alertMessage = '';

    constructor(
        private staffService: StaffService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.firstCoulmn = Array(10)
            .fill(1)
            .map((x, i) => i + 1);
        this.secondCoulmn = Array(10)
            .fill(1)
            .map((x, i) => i + 11);
        this.activatedRoute.params.subscribe(async (params: Params) => {
            this.passenger = undefined;
            this.seatClicked = undefined;
            this.seatId = undefined;
            this.id = +params['id'];
            const flights = await this.staffService.getAllFlights();
            this.selectedFlight = flights[this.id];
            if (this.selectedFlight?.hasOwnProperty('seats')) {
                this.seats = this.selectedFlight?.seats ? this.selectedFlight.seats : [];
            } else {
                this.seats = [];
            }
            this.activatedRoute.parent?.url.subscribe((value) => {
                this.moduleName = value[0].path;
            });
            this.ancillaryServices = this.selectedFlight?.ancillaryServicesProvided;
            this.shoppingList = this.selectedFlight?.shoppingItemsProvided;
        });
        this.flightSubscription = this.staffService.flightIdChanged.subscribe((index) => {
            this.passenger = undefined;
            this.seatClicked = undefined;
            this.seatId = undefined;
            this.id = index;
            this.staffService.getSelectedFlight(index).subscribe((flight) => {
                this.selectedFlight = flight;
                if (this.selectedFlight?.hasOwnProperty('seats')) {
                    this.seats = this.selectedFlight?.seats
                        ? this.selectedFlight.seats
                        : [];
                    this.ancillaryServices =
                        this.selectedFlight?.ancillaryServicesProvided;
                    this.shoppingList = this.selectedFlight?.shoppingItemsProvided;
                } else {
                    this.seats = [];
                }
            });
        });
    }

    //for getting passenger details
    onSeatClick(seatnumber: number) {
        if (this.seatClicked != seatnumber) {
            this.seatId = seatnumber;
            this.passenger = this.seats?.filter((seat) => seat.seatNo === this.seatId)[0];
            this.seatClicked = seatnumber;
        } else {
            this.seatClicked = undefined;
            this.seatId = undefined;
            this.passenger = undefined;
        }
    }

    //for getting seat background after selection
    checkInBg(seatnumber: number) {
        this.seatId = seatnumber;
        if (this.seats) {
            const passenger: Passenger = this.seats.filter(
                (seat) => seat.seatNo === this.seatId
            )[0];
            if (this.seatClicked === seatnumber && passenger) {
                return { 'background-color': 'grey', cursor: 'pointer' };
            } else if (passenger) {
                return { 'background-color': 'transparent', cursor: 'pointer' };
            } else {
                return { 'background-color': 'transparent', cursor: 'not-allowed' };
            }
        }
        return { 'background-color': 'transparent', cursor: 'not-allowed' };
    }

    //for getting seat image
    getSeatImage(seatId: number) {
        this.seatId = seatId;
        let imgSource = '../../../../../assets/Armchair.png';
        if (this.seats) {
            const passenger: Passenger = this.seats.filter(
                (seat) => seat.seatNo === this.seatId
            )[0];
            if (passenger) {
                if (passenger.mealPreference === 'Special Meals') {
                    imgSource = '../../../../../assets/splMeals.png';
                } else if (passenger.mealPreference === 'Standard Meals') {
                    imgSource = '../../../../../assets/StdMeals.png';
                } else {
                    imgSource = '../../../../../assets/ArmChair.png';
                }
            }
        }
        return imgSource;
    }

    //for Checking whether the service has been already opted
    checkService(index: number, serviceName: string) {
        if (serviceName === 'ancillary') {
            return this.passenger?.ancillaryServices.indexOf(
                this.ancillaryServices[index]
            ) != -1
                ? { cursor: 'not-allowed' }
                : { cursor: 'pointer' };
        } else {
            return this.passenger?.shoppedItems?.indexOf(this.shoppingList[index]) != -1
                ? { cursor: 'not-allowed' }
                : { cursor: 'pointer' };
        }
    }

    //for adding services
    onServiceAdd(index: number, serviceName: string) {
        if (serviceName === 'ancillary') {
            if (
                this.passenger?.ancillaryServices.indexOf(
                    this.ancillaryServices[index]
                ) === -1
            )
                this.passenger?.ancillaryServices.push(this.ancillaryServices[index]);
        } else {
            if (this.passenger?.shoppedItems.indexOf(this.shoppingList[index]) === -1)
                this.passenger?.shoppedItems.push(this.shoppingList[index]);
        }
    }

    //for removing services
    onServiceRemove(index: number, serviceName: string) {
        if (serviceName === 'ancillary') {
            this.passenger?.ancillaryServices.splice(index, 1);
        } else {
            this.passenger?.shoppedItems.splice(index, 1);
        }
    }

    //save service changes
    confirmAllChanges() {
        if (this.seats && this.passenger && this.id != undefined) {
            const passengerId = this.seats.indexOf(this.passenger);
            this.staffService.changePassengerServices(
                this.id,
                passengerId,
                this.passenger
            );
        }
        this.alertMessage = 'Passenger services saved successfully'
        this.passenger = undefined;
        this.seatClicked = undefined;
        this.seatId = undefined;
    }

    onClosed() {
      this.alertMessage = ''
    }

    ngOnDestroy() {
        this.flightSubscription?.unsubscribe();
    }
}