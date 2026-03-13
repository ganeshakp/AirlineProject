import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { StaffService } from 'src/app/shared/staff.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Flight } from 'src/app/shared/flight.model';
import { Passenger } from 'src/app/shared/passenger.model';
import { AdminService } from '../admin.service';

@Component({
<<<<<<< HEAD
    selector: 'app-services',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit, OnDestroy {
    id?: number;
    selectedFlight?: Flight;
    selectedPassenger?: Passenger;
    selectedPassengerId?: number;
    flightSubscription?: Subscription;
    flights: Flight[] = [];
    passengers?: Passenger[] = [];
    ancillaryText = '';
    shoppingItemsText = '';
    mealText = '';
    alertMessage = '';
    ancillaryServices: string[] = [];
    mealServices: string[] = [];
    shoppingServices: string[] = [];
    deleteCheck: string[] = [];
    constructor(
        private staffService: StaffService,
        private adminService: AdminService,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(async (params: Params) => {
            this.alertMessage = '';
            this.selectedPassenger = undefined;
            this.id = +params['id'];
            this.flights = await this.staffService.getAllFlights();
            if (this.flights) this.selectedFlight = this.flights[this.id];
            if (this.selectedFlight) {
                this.ancillaryServices = this.selectedFlight.ancillaryServicesProvided;
                this.shoppingServices = this.selectedFlight.shoppingItemsProvided;
                this.mealServices = this.selectedFlight.mealsProvided;
                this.passengers = (
                    this.selectedFlight.seats ? this.selectedFlight.seats : []
                ).sort((a, b) => (a.seatNo > b.seatNo ? 1 : -1));
                this.passengers.forEach((passenger) => {
                    passenger.ancillaryServices.forEach((service) => {
                        this.deleteCheck.push(service);
                    });
                    passenger.shoppedItems.forEach((service) => {
                        this.deleteCheck.push(service);
                    });
                });
            }
        });
        this.flightSubscription = this.staffService.flightIdChanged.subscribe((index) => {
            this.alertMessage = '';
            this.selectedPassenger = undefined;
            if (this.router.url.indexOf('services') != -1) {
                this.router.navigate(['admin', index, 'services']);
            }
        });
    }

    ancillaryClick() {
        if (this.ancillaryText != '') {
            this.ancillaryServices.indexOf(this.ancillaryText) == -1
                ? this.ancillaryServices.push(this.ancillaryText)
                : alert('Item already available');
        }else {
          alert('Please enter a value and click Add')
        }
    }

    shoppingClick() {
      if (this.shoppingItemsText != '') {
        this.shoppingServices.indexOf(this.shoppingItemsText) == -1
            ? this.shoppingServices.push(this.shoppingItemsText)
            : alert('Item already available');
      }else {
        alert('Please enter a value and click Add')
      }
    }

    mealsClick() {
      if (this.mealText != '') {
        this.mealServices.indexOf(this.mealText) == -1
            ? this.mealServices.push(this.mealText)
            : alert('Item already available');
      } else {
        alert('Please enter a value and click Add')
      }
    }

    onConfirm() {
        if (this.selectedFlight && this.id != undefined) {
            this.selectedFlight.ancillaryServicesProvided = this.ancillaryServices;
            this.selectedFlight.shoppingItemsProvided = this.shoppingServices;
            this.selectedFlight.mealsProvided = this.mealServices;
            this.adminService
                .updateFlightServices(this.selectedFlight, this.id)
                .subscribe(() => {
                    this.ancillaryText = '';
                    this.shoppingItemsText = '';
                    this.mealText = '';
                    this.alertMessage = 'Services saved successfully';
                });
        }
    }

    removeItem(item: string, service: string) {
        if (service === 'ancillary') {
            this.deleteCheck.indexOf(item) == -1
                ? this.ancillaryServices.splice(this.ancillaryServices.indexOf(item), 1)
                : alert("Item can't be removed since a passenger has opted for this");
        } else if (service === 'shopping') {
            this.deleteCheck.indexOf(item) == -1
                ? this.shoppingServices.splice(this.shoppingServices.indexOf(item), 1)
                : alert("Item can't be removed since a passenger has opted for this");
        } else {
            this.deleteCheck.indexOf(item) == -1
                ? this.mealServices.splice(this.mealServices.indexOf(item), 1)
                : alert("Item can't be removed since a passenger has opted for this");
        }
    }

    onClosed() {
        this.alertMessage = '';
    }

    ngOnDestroy() {
        this.flightSubscription?.unsubscribe();
    }
}
=======
    selector: 'app-services',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit, OnDestroy {
    id?: number;
    selectedFlight?: Flight;
    selectedPassenger?: Passenger;
    selectedPassengerId?: number;
    flightSubscription?: Subscription;
    flights: Flight[] = [];
    passengers?: Passenger[] = [];
    ancillaryText = '';
    shoppingItemsText = '';
    mealText = '';
    alertMessage = '';
    ancillaryServices: string[] = [];
    mealServices: string[] = [];
    shoppingServices: string[] = [];
    deleteCheck: string[] = [];
    constructor(
        private staffService: StaffService,
        private adminService: AdminService,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(async (params: Params) => {
            this.alertMessage = '';
            this.selectedPassenger = undefined;
            this.id = +params['id'];
            this.flights = await this.staffService.getAllFlights();
            if (this.flights) this.selectedFlight = this.flights[this.id];
            if (this.selectedFlight) {
                this.ancillaryServices = this.selectedFlight.ancillaryServicesProvided;
                this.shoppingServices = this.selectedFlight.shoppingItemsProvided;
                this.mealServices = this.selectedFlight.mealsProvided;
                this.passengers = (
                    this.selectedFlight.seats ? this.selectedFlight.seats : []
                ).sort((a, b) => (a.seatNo > b.seatNo ? 1 : -1));
                this.passengers.forEach((passenger) => {
                    passenger.ancillaryServices.forEach((service) => {
                        this.deleteCheck.push(service);
                    });
                    passenger.shoppedItems.forEach((service) => {
                        this.deleteCheck.push(service);
                    });
                });
            }
        });
        this.flightSubscription = this.staffService.flightIdChanged.subscribe((index) => {
            this.alertMessage = '';
            this.selectedPassenger = undefined;
            if (this.router.url.indexOf('services') != -1) {
                this.router.navigate(['admin', index, 'services']);
            }
        });
    }

    ancillaryClick() {
        if (this.ancillaryText != '') {
            this.ancillaryServices.indexOf(this.ancillaryText) == -1
                ? this.ancillaryServices.push(this.ancillaryText)
                : alert('Item already available');
        } else {
            alert('Please enter a value and click Add');
        }
    }

    shoppingClick() {
        if (this.shoppingItemsText != '') {
            this.shoppingServices.indexOf(this.shoppingItemsText) == -1
                ? this.shoppingServices.push(this.shoppingItemsText)
                : alert('Item already available');
        } else {
            alert('Please enter a value and click Add');
        }
    }

    mealsClick() {
        if (this.mealText != '') {
            this.mealServices.indexOf(this.mealText) == -1
                ? this.mealServices.push(this.mealText)
                : alert('Item already available');
        } else {
            alert('Please enter a value and click Add');
        }
    }

    onConfirm() {
        if (this.selectedFlight && this.id != undefined) {
            this.selectedFlight.ancillaryServicesProvided = this.ancillaryServices;
            this.selectedFlight.shoppingItemsProvided = this.shoppingServices;
            this.selectedFlight.mealsProvided = this.mealServices;
            this.adminService
                .updateFlightServices(this.selectedFlight, this.id)
                .subscribe(() => {
                    this.ancillaryText = '';
                    this.shoppingItemsText = '';
                    this.mealText = '';
                    this.alertMessage = 'Services saved successfully';
                });
        }
    }

    removeItem(item: string, service: string) {
        if (service === 'ancillary') {
            this.deleteCheck.indexOf(item) == -1
                ? this.ancillaryServices.splice(this.ancillaryServices.indexOf(item), 1)
                : alert("Item can't be removed since a passenger has opted for this");
        } else if (service === 'shopping') {
            this.deleteCheck.indexOf(item) == -1
                ? this.shoppingServices.splice(this.shoppingServices.indexOf(item), 1)
                : alert("Item can't be removed since a passenger has opted for this");
        } else {
            this.deleteCheck.indexOf(item) == -1
                ? this.mealServices.splice(this.mealServices.indexOf(item), 1)
                : alert("Item can't be removed since a passenger has opted for this");
        }
    }

    onClosed() {
        this.alertMessage = '';
    }

    ngOnDestroy() {
        this.flightSubscription?.unsubscribe();
    }
}
>>>>>>> 997f8ec91f9e1cbd54fdc4920c39ca44f314f432
