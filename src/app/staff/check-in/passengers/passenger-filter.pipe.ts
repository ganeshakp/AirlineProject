<<<<<<< HEAD

=======
>>>>>>> 997f8ec91f9e1cbd54fdc4920c39ca44f314f432
import { Pipe, PipeTransform } from '@angular/core';
import { Passenger } from 'src/app/shared/passenger.model';

@Pipe({
<<<<<<< HEAD
    name: 'passengerFilter'
})
export class PassengerFilterPipe implements PipeTransform {
    transform(
        value: Passenger[] | undefined,
        filterString: string
    ): Passenger[] | undefined {
        if (value?.length === 0 || filterString === '') {
            return value;
        }

        let filteredPassengers: Passenger[] | undefined;
        if (filterString === 'CheckedIn') {
            return (filteredPassengers = value?.filter(
                (passenger) => passenger.checkedIn
            ));
        }
        if (filterString === 'NotCheckedIn') {
            return (filteredPassengers = value?.filter(
                (passenger) => !passenger.checkedIn
            ));
        }
        if (filterString === 'WheelChair') {
            return (filteredPassengers = value?.filter(
                (passenger) => passenger.splRequest === 'WheelChair'
            ));
        }
        return filteredPassengers;
    }
}
=======
    name: 'passengerFilter'
})
export class PassengerFilterPipe implements PipeTransform {
    transform(
        value: Passenger[] | undefined,
        filterString: string
    ): Passenger[] | undefined {
        if (value?.length === 0 || filterString === '') {
            return value;
        }

        let filteredPassengers: Passenger[] | undefined;
        if (filterString === 'CheckedIn') {
            return (filteredPassengers = value?.filter(
                (passenger) => passenger.checkedIn
            ));
        }
        if (filterString === 'NotCheckedIn') {
            return (filteredPassengers = value?.filter(
                (passenger) => !passenger.checkedIn
            ));
        }
        if (filterString === 'WheelChair') {
            return (filteredPassengers = value?.filter(
                (passenger) => passenger.splRequest === 'WheelChair'
            ));
        }
        return filteredPassengers;
    }
}
>>>>>>> 997f8ec91f9e1cbd54fdc4920c39ca44f314f432
