import { Passenger } from './passenger.model';

export class Flight {
<<<<<<< HEAD
    public name: string;
    public departure: string;
    public arrival: string;
    public departureTime: Date;
    public arrivalTime: Date;
    public ancillaryServicesProvided: string[];
    public mealsProvided: string[];
    public shoppingItemsProvided: string[];
    public seats: Passenger[];

    constructor(
        name: string,
        departure: string,
        arrival: string,
        departureTime: Date,
        arrivalTime: Date,
        ancillaryServicesProvided: string[],
        mealsProvided: string[],
        shoppingItemsProvided: string[],
        seats: Passenger[]
    ) {
        this.name = name;
        this.arrival = arrival;
        this.departure = departure;
        this.departureTime = departureTime;
        this.arrivalTime = arrivalTime;
        this.ancillaryServicesProvided = ancillaryServicesProvided;
        this.mealsProvided = mealsProvided;
        this.shoppingItemsProvided = shoppingItemsProvided;
        this.seats = seats;
    }
}
=======
    public name: string;
    public departure: string;
    public arrival: string;
    public departureTime: Date;
    public arrivalTime: Date;
    public ancillaryServicesProvided: string[];
    public mealsProvided: string[];
    public shoppingItemsProvided: string[];
    public seats: Passenger[];

    constructor(
        name: string,
        departure: string,
        arrival: string,
        departureTime: Date,
        arrivalTime: Date,
        ancillaryServicesProvided: string[],
        mealsProvided: string[],
        shoppingItemsProvided: string[],
        seats: Passenger[]
    ) {
        this.name = name;
        this.arrival = arrival;
        this.departure = departure;
        this.departureTime = departureTime;
        this.arrivalTime = arrivalTime;
        this.ancillaryServicesProvided = ancillaryServicesProvided;
        this.mealsProvided = mealsProvided;
        this.shoppingItemsProvided = shoppingItemsProvided;
        this.seats = seats;
    }
}
>>>>>>> 997f8ec91f9e1cbd54fdc4920c39ca44f314f432
