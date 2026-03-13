import { Pipe, PipeTransform } from '@angular/core';
import { Passenger } from 'src/app/shared/passenger.model';

@Pipe({
<<<<<<< HEAD
    name: 'passengerMasterFilter'
})
export class PassengerMasterFilterPipe implements PipeTransform {
    transform(
        value: Passenger[] | undefined,
        filterString: string
    ): Passenger[] | undefined {
        if (value?.length === 0 || filterString === '') {
            return value;
        }

        let filteredPassengers: Passenger[] | undefined;
        if (filterString === 'passport') {
            return (filteredPassengers = value?.filter(
                (passenger) => passenger.passport === ''
            ));
        }
        if (filterString === 'address') {
            return (filteredPassengers = value?.filter(
                (passenger) => passenger.address === ''
            ));
        }
        if (filterString === 'dob') {
            return (filteredPassengers = value?.filter(
                (passenger) => !passenger.dateOfBirth
            ));
        }
        return filteredPassengers;
    }
=======
    name: 'passengerMasterFilter'
})
export class PassengerMasterFilterPipe implements PipeTransform {
    transform(
        value: Passenger[] | undefined,
        filterString: string
    ): Passenger[] | undefined {
        if (value?.length === 0 || filterString === '') {
            return value;
        }

        let filteredPassengers: Passenger[] | undefined;
        if (filterString === 'passport') {
            return (filteredPassengers = value?.filter(
                (passenger) => passenger.passport === ''
            ));
        }
        if (filterString === 'address') {
            return (filteredPassengers = value?.filter(
                (passenger) => passenger.address === ''
            ));
        }
        if (filterString === 'dob') {
            return (filteredPassengers = value?.filter(
                (passenger) => !passenger.dateOfBirth
            ));
        }
        return filteredPassengers;
    }
>>>>>>> 997f8ec91f9e1cbd54fdc4920c39ca44f314f432
}
