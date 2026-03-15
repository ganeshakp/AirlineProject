import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerMasterComponent } from './passengerMaster.component';
import { RouterTestingModule } from '@angular/router/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { PassengerMasterFilterPipe } from './passenger-master-filter.pipe';
import { StaffService } from 'src/app/shared/staff.service';
import { Passenger } from 'src/app/shared/passenger.model';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('PassengerMasterComponent', () => {
    let component: PassengerMasterComponent;
    let fixture: ComponentFixture<PassengerMasterComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
    declarations: [PassengerMasterComponent, PassengerMasterFilterPipe],
    imports: [RouterTestingModule, FormsModule],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
}).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PassengerMasterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('edit flag should be false at the start', () => {
        expect(component.editFlag).toEqual(false);
    });
    it('new flag should be false at the start', () => {
        expect(component.newFlag).toEqual(false);
    });
    it('when newPassenger function invoked, new flag should be set to true', () => {
        component.newPassenger();
        expect(component.newFlag).toEqual(true);
    });
    it('when passengerClick function invoked, edit flag should be set to true', () => {
        let passenger: Passenger = {
            address: '1,ABC,Chennai',
            ancillaryServices: ['Sandwiches', 'Snacks'],
            checkedIn: false,
            dateOfBirth: new Date(),
            mealPreference: 'Standard Meals',
            name: 'Ganesha',
            passport: 'Z123456',
            seatNo: 1,
            splRequest: '',
            shoppedItems: ['Perfume', 'Chocolates']
        };
        component.passengerClick(passenger);
        expect(component.editFlag).toEqual(true);
    });
    it('when initmethod function invoked, all flags should be set to false', () => {
        component.ngOnInit();
        console.log(component.editFlag);
        expect(component.editFlag && component.newFlag).toEqual(false);
    });
    it('get all flights', () => {
        let service = fixture.debugElement.injector.get(StaffService);
        if (component.flights) {
            let spy = spyOn(service, 'getAllFlights').and.returnValue(
                Promise.resolve(component.flights)
            );
            console.log(spy);
        }
        fixture.detectChanges();
        expect(component.flights).toEqual(undefined);
    });

});
