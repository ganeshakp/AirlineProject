<<<<<<< HEAD

=======
>>>>>>> 997f8ec91f9e1cbd54fdc4920c39ca44f314f432
import { Injectable } from '@angular/core';
import { Flight } from 'src/app/shared/flight.model';
import { Passenger } from 'src/app/shared/passenger.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

<<<<<<< HEAD

@Injectable({
    providedIn: 'root'
})
export class StaffService {

    Flights: Flight[] = [];
    passengers: Passenger[] = [];

    flightIdChanged = new Subject<number>();
    flightDetailsChanged = new Subject<Flight[]>();

    constructor(private http: HttpClient) {}

    async getAllFlights() {
      const flights : Flight[] = (await (await this.fetchAllFlights()).toPromise())
      if (this.Flights.length) {
        return this.Flights;
      } else {
        this.Flights = flights
        return this.Flights
      }



    }

    getSelectedFlight(index: number) {
        return this.http
            .get<Flight>(
                'https://angularproject-2e085-default-rtdb.firebaseio.com/flights/' +
                    index +
                    '.json/'
            )
            .pipe(
                map((flight) => {
                    return {
                        ...flight,
                        ancillaryServicesProvided: flight.ancillaryServicesProvided
                            ? flight.ancillaryServicesProvided
                            : [],
                        mealsProvided: flight.mealsProvided ? flight.mealsProvided : [],
                        shoppingItemsProvided: flight.shoppingItemsProvided
                            ? flight.shoppingItemsProvided
                            : [],
                        seats: flight.seats ? flight.seats : []
                    };
                }),
                tap((flight) => {
                    flight['seats'].forEach((seat) => {
                        seat.ancillaryServices = seat.ancillaryServices || [];
                        seat.shoppedItems = seat.shoppedItems || [];
                        seat.address = seat.address || '';
                        seat.passport = seat.passport || '';
                        seat.dateOfBirth = seat.dateOfBirth || '';
                    });
                })
            );
    }

    passengerSeatChange(flightId: number, oldSeatNumber: number, newSeatNumber: number) {
        const passenger = this.Flights[flightId].seats.find(
            (a) => a.seatNo === oldSeatNumber
        );
        const seats = this.Flights[flightId].seats;
        if (passenger) {
            const passengerId = seats.indexOf(passenger);
            this.Flights[flightId].seats[passengerId].seatNo = newSeatNumber;
            this.changePassengerSeat(flightId, passengerId, newSeatNumber);
        }
    }

    saveFlights(flights: Flight[]) {
        this.http
            .put<Flight[]>(
                'https://angularproject-2e085-default-rtdb.firebaseio.com/flights.json',
                flights
            )
            .subscribe((response) => {
                this.flightDetailsChanged.next(response);
            });
    }

    async fetchAllFlights() {
        return await this.http
            .get<Flight[]>(
                'https://angularproject-2e085-default-rtdb.firebaseio.com/flights.json'
            )
            .pipe(
                map((flights) => {
                    return flights.map((flight) => {
                        return {
                            ...flight,
                            ancillaryServicesProvided: flight.ancillaryServicesProvided
                                ? flight.ancillaryServicesProvided
                                : [],
                            mealsProvided: flight.mealsProvided
                                ? flight.mealsProvided
                                : [],
                            shoppingItemsProvided: flight.shoppingItemsProvided
                                ? flight.shoppingItemsProvided
                                : [],
                            seats: flight.seats ? flight.seats : []
                        };
                    });
                }),
                tap((flights) => {
                    flights.forEach((flight) => {
                        flight['seats'].forEach((seat) => {
                            seat.ancillaryServices = seat.ancillaryServices || [];
                            seat.shoppedItems = seat.shoppedItems || [];
                        });
                    });
                })
            );
    }

    changePassengerSeat(flightId: number, passengerId: number, seatNumber: number) {
        this.http
            .put<number>(
                'https://angularproject-2e085-default-rtdb.firebaseio.com/flights/' +
                    flightId +
                    '/seats' +
                    '/' +
                    passengerId +
                    '/seatNo.json',
                seatNumber
            )
            .subscribe(() => {
                this.flightIdChanged.next(flightId);
                //console.log(response)
            });
    }

    changePassengerServices(flightId: number, passengerId: number, passenger: Passenger) {
        this.http
            .put<Passenger>(
                'https://angularproject-2e085-default-rtdb.firebaseio.com/flights/' +
                    flightId +
                    '/seats' +
                    '/' +
                    passengerId +
                    '.json',
                passenger
            )
            .subscribe(() => {
                //this.flightIdChanged.next(flightId)
                //console.log(response)
            });
    }
}
=======
@Injectable({
    providedIn: 'root'
})
export class StaffService {
    Flights: Flight[] = [];
    passengers: Passenger[] = [];

    flightIdChanged = new Subject<number>();
    flightDetailsChanged = new Subject<Flight[]>();

    constructor(private http: HttpClient) {}

    async getAllFlights() {
        const flights: Flight[] = await (await this.fetchAllFlights()).toPromise() as Flight[];
        if (this.Flights.length) {
            return this.Flights;
        } else {
            this.Flights = flights;
            return this.Flights;
        }
    }

    getSelectedFlight(index: number) {
        return this.http
            .get<Flight>(
                'https://angularproject-2e085-default-rtdb.firebaseio.com/flights/' +
                    index +
                    '.json/'
            )
            .pipe(
                map((flight) => {
                    return {
                        ...flight,
                        ancillaryServicesProvided: flight.ancillaryServicesProvided
                            ? flight.ancillaryServicesProvided
                            : [],
                        mealsProvided: flight.mealsProvided ? flight.mealsProvided : [],
                        shoppingItemsProvided: flight.shoppingItemsProvided
                            ? flight.shoppingItemsProvided
                            : [],
                        seats: flight.seats ? flight.seats : []
                    };
                }),
                tap((flight) => {
                    flight['seats'].forEach((seat) => {
                        seat.ancillaryServices = seat.ancillaryServices || [];
                        seat.shoppedItems = seat.shoppedItems || [];
                        seat.address = seat.address || '';
                        seat.passport = seat.passport || '';
                        seat.dateOfBirth = seat.dateOfBirth || '';
                    });
                })
            );
    }

    passengerSeatChange(flightId: number, oldSeatNumber: number, newSeatNumber: number) {
        const passenger = this.Flights[flightId].seats.find(
            (a) => a.seatNo === oldSeatNumber
        );
        const seats = this.Flights[flightId].seats;
        if (passenger) {
            const passengerId = seats.indexOf(passenger);
            this.Flights[flightId].seats[passengerId].seatNo = newSeatNumber;
            this.changePassengerSeat(flightId, passengerId, newSeatNumber);
        }
    }

    saveFlights(flights: Flight[]) {
        this.http
            .put<Flight[]>(
                'https://angularproject-2e085-default-rtdb.firebaseio.com/flights.json',
                flights
            )
            .subscribe((response) => {
                this.flightDetailsChanged.next(response);
            });
    }

    async fetchAllFlights() {
        return await this.http
            .get<Flight[]>(
                'https://angularproject-2e085-default-rtdb.firebaseio.com/flights.json'
            )
            .pipe(
                map((flights) => {
                    return flights.map((flight) => {
                        return {
                            ...flight,
                            ancillaryServicesProvided: flight.ancillaryServicesProvided
                                ? flight.ancillaryServicesProvided
                                : [],
                            mealsProvided: flight.mealsProvided
                                ? flight.mealsProvided
                                : [],
                            shoppingItemsProvided: flight.shoppingItemsProvided
                                ? flight.shoppingItemsProvided
                                : [],
                            seats: flight.seats ? flight.seats : []
                        };
                    });
                }),
                tap((flights) => {
                    flights.forEach((flight) => {
                        flight['seats'].forEach((seat) => {
                            seat.ancillaryServices = seat.ancillaryServices || [];
                            seat.shoppedItems = seat.shoppedItems || [];
                        });
                    });
                })
            );
    }

    changePassengerSeat(flightId: number, passengerId: number, seatNumber: number) {
        this.http
            .put<number>(
                'https://angularproject-2e085-default-rtdb.firebaseio.com/flights/' +
                    flightId +
                    '/seats' +
                    '/' +
                    passengerId +
                    '/seatNo.json',
                seatNumber
            )
            .subscribe(() => {
                this.flightIdChanged.next(flightId); //console.log(response)
            });
    }

    changePassengerServices(flightId: number, passengerId: number, passenger: Passenger) {
        this.http
            .put<Passenger>(
                'https://angularproject-2e085-default-rtdb.firebaseio.com/flights/' +
                    flightId +
                    '/seats' +
                    '/' +
                    passengerId +
                    '.json',
                passenger
            )
            .subscribe(() => {
                //this.flightIdChanged.next(flightId)
                //console.log(response)
            });
    }
}
>>>>>>> 997f8ec91f9e1cbd54fdc4920c39ca44f314f432
