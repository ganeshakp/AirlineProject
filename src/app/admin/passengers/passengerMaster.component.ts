import { Component, OnInit, OnDestroy } from '@angular/core';
import { Flight } from 'src/app/shared/flight.model';
import { Passenger } from 'src/app/shared/passenger.model';
import { StaffService } from 'src/app/shared/staff.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AdminService } from '../admin.service';

@Component({
    selector: 'app-passengers',
    templateUrl: './passengerMaster.component.html',
    styleUrls: ['./passengerMaster.component.scss']
})
export class PassengerMasterComponent implements OnInit, OnDestroy {
    id?: number;
    flights?: Flight[];
    selectedFlight?: Flight;
    selectedPassenger?: Passenger;
    selectedPassengerId?: number;
    filterText = '';
    seatChangeConfirm = false;
    editFlag = false;
    newFlag = false;
    newSeatSelected = 0;
    alertMessage = '';
    passengers?: Passenger[] = [];
    passengerForm?: FormGroup;
    flightSubscription?: Subscription;
    passengerSeatNo = -1;
    emptySeats: number[] = [];
    constructor(
        private staffService: StaffService,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private adminService: AdminService
    ) {}

    ngOnInit(): void {
        this.initMethod();
        this.flightSubscription = this.staffService.flightIdChanged.subscribe((index) => {
            this.selectedPassenger = undefined;
            if (this.router.url.indexOf('passengersMaster') != -1) {
                this.router.navigate(['admin', index, 'passengersMaster']);
            }
        });
    }

    private initMethod() {
        this.activatedRoute.params.subscribe(async (params: Params) => {
            this.selectedPassenger = undefined;
            this.newFlag = this.editFlag = false;
            this.emptySeats = Array(20)
                .fill(1)
                .map((x, i) => i + 1);
            this.passengerSeatNo = -1;
            this.passengerForm?.reset();
            this.id = +params['id'];
            this.flights = await this.staffService.getAllFlights();
            if (this.flights) this.selectedFlight = this.flights[this.id];
            if (this.selectedFlight) {
                this.passengers = (
                    this.selectedFlight.seats ? this.selectedFlight.seats : []
                ).sort((a, b) => (a.seatNo > b.seatNo ? 1 : -1));
                const filledSeats = this.passengers?.map((passenger) => passenger.seatNo);
                this.emptySeats = this.emptySeats.filter(
                    (seat) => !filledSeats?.includes(seat)
                );
            }
        });
    }

    private initForm() {
        const name = this.editFlag ? this.selectedPassenger?.name : '';
        const address = this.editFlag ? this.selectedPassenger?.address : '';
        const passport = this.editFlag ? this.selectedPassenger?.passport : '';
        const dateOfBirth = this.editFlag ? this.selectedPassenger?.dateOfBirth : '';
        const seatNo = this.editFlag ? this.selectedPassenger?.seatNo : -1;
        const splRequest = this.editFlag ? this.selectedPassenger?.splRequest : '';
        this.passengerForm = new FormGroup({
            name: new FormControl(name, Validators.required),
            address: new FormControl(address),
            passport: new FormControl(passport),
            dateOfBirth: new FormControl(dateOfBirth),
            seatNo: new FormControl(seatNo, Validators.required),
            splRequest: new FormControl(splRequest)
        });
    }

    newPassenger() {
        this.editFlag = false;
        this.newFlag = true;
        this.selectedPassenger = undefined;
        if (this.passengerSeatNo != -1) {
            this.emptySeats
                .splice(this.emptySeats.indexOf(this.passengerSeatNo), 1)
                .sort((a, b) => (a > b ? 1 : -1));
        }
        this.passengerSeatNo = -1;
        this.passengerForm ? this.passengerForm?.reset() : this.initForm();
    }

    passengerClick(passenger: Passenger) {
        if (this.passengerSeatNo != -1) {
            this.emptySeats
                .splice(this.emptySeats.indexOf(this.passengerSeatNo), 1)
                .sort((a, b) => (a > b ? 1 : -1));
        }
        this.editFlag = true;
        this.selectedPassenger = passenger;
        this.passengerSeatNo = passenger.seatNo;
        this.emptySeats.push(passenger.seatNo);
        this.emptySeats.sort((a, b) => (a > b ? 1 : -1));
        this.initForm();
    }
    async onSubmit() {
        let flightId = -1;
        const passengerDetail = this.passengerForm?.value;
        passengerDetail.ancillaryServices = [];
        passengerDetail.shoppedItems = [];
        passengerDetail.checkedIn = false;
        passengerDetail.mealPreference = 'Standard Meals';

        if (this.selectedPassenger) {
            !this.editFlag
                ? (passengerDetail.ancillaryServices = [])
                : (passengerDetail.ancillaryServices =
                      this.selectedPassenger?.ancillaryServices);
            !this.editFlag
                ? (passengerDetail.shoppedItems = [])
                : this.selectedPassenger?.shoppedItems;
            !this.editFlag
                ? (passengerDetail.checkedIn = false)
                : this.selectedPassenger?.checkedIn;
            !this.editFlag
                ? (passengerDetail.mealPreference = 'Standard Meals')
                : this.selectedPassenger?.mealPreference;
        }

        if (this.editFlag) {
            if (this.selectedPassenger && this.passengers) {
                const passengerId = this.passengers?.indexOf(this.selectedPassenger);
                this.passengers[passengerId] = passengerDetail;
            }
        } else {
            this.passengers?.push(passengerDetail);
        }
        this.id != undefined ? (flightId = this.id) : -1;
        if (this.passengers && flightId != -1) {
            await this.adminService
                .modifyPassengerDetail(this.passengers, flightId)
                .subscribe(() => {
                    this.alertMessage = 'Passenger details saved successfully';
                    this.onCancel();
                });
        }
    }

    onCancel() {
        this.alertMessage = '';
        this.selectedPassenger = undefined;
        this.newFlag = this.editFlag = false;
        this.passengerSeatNo === this.passengerForm?.value['seatNo']
            ? this.emptySeats
                  .splice(this.emptySeats.indexOf(this.passengerSeatNo), 1)
                  .sort((a, b) => (a > b ? 1 : -1))
            : this.emptySeats
                  .splice(this.emptySeats.indexOf(this.passengerForm?.value['seatNo']), 1)
                  .sort((a, b) => (a > b ? 1 : -1));
        this.passengerSeatNo = -1;
        this.passengerForm?.reset();
        this.passengers?.sort((a, b) => (a.seatNo > b.seatNo ? 1 : -1));
        if (this.id !== undefined) {
            this.staffService.flightIdChanged.next(this.id);
        }
    }

    onClosed() {
        this.alertMessage = '';
    }

    ngOnDestroy() {
        this.flightSubscription?.unsubscribe();
    }
}