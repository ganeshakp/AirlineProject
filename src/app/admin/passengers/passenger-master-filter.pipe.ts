import { Pipe, PipeTransform } from '@angular/core';
import { Passenger } from 'src/app/shared/passenger.model';

@Pipe({
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
}
