<<<<<<< HEAD

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatsComponent } from './seats.component';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('SeatsComponent', () => {
    let component: SeatsComponent;
    let fixture: ComponentFixture<SeatsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
    declarations: [SeatsComponent],
    imports: [RouterTestingModule],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
}).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SeatsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should check-in passenger on clicking the respective seat number', () => {
        component.seats = [
            {
                address: '1,ABC,Chennai',
                ancillaryServices: ['Sandwiches', 'Snacks'],
                checkedIn: false,
                dateOfBirth: new Date(),
                mealPreference: 'Standard Meals',
                name: 'Ganesha',
                passport: 'Z123456',
                seatNo: 1,
                splRequest: '',
                shoppedItems: []
            },
            {
                address: '1,ABC,Chennai',
                ancillaryServices: ['Sandwiches', 'Snacks'],
                checkedIn: true,
                dateOfBirth: new Date(),
                mealPreference: 'Standard Meals',
                name: 'Ganesha',
                passport: 'Z123456',
                seatNo: 2,
                splRequest: '',
                shoppedItems: []
            }
        ];
        component.onSeatClick(1);
        expect(component.seats[0].checkedIn).toEqual(true);
    });
    it('should render a colored background if the passenger has already checked in', () => {
        component.seats = [
            {
                address: '1,ABC,Chennai',
                ancillaryServices: ['Sandwiches', 'Snacks'],
                checkedIn: false,
                dateOfBirth: new Date(),
                mealPreference: 'Standard Meals',
                name: 'Ganesha',
                passport: 'Z123456',
                seatNo: 1,
                splRequest: '',
                shoppedItems: []
            },
            {
                address: '1,ABC,Chennai',
                ancillaryServices: ['Sandwiches', 'Snacks'],
                checkedIn: true,
                dateOfBirth: new Date(),
                mealPreference: 'Standard Meals',
                name: 'Ganesha',
                passport: 'Z123456',
                seatNo: 2,
                splRequest: '',
                shoppedItems: []
            }
        ];
        const result = component.checkInBg(2);
        expect(result).toEqual({ 'background-color': '#6dc665', cursor: 'pointer' });
    });
    it('should render a transparent background if the passenger is yet to check in', () => {
        component.seats = [
            {
                address: '1,ABC,Chennai',
                ancillaryServices: ['Sandwiches', 'Snacks'],
                checkedIn: false,
                dateOfBirth: new Date(),
                mealPreference: 'Standard Meals',
                name: 'Ganesha',
                passport: 'Z123456',
                seatNo: 1,
                splRequest: '',
                shoppedItems: []
            },
            {
                address: '1,ABC,Chennai',
                ancillaryServices: ['Sandwiches', 'Snacks'],
                checkedIn: true,
                dateOfBirth: new Date(),
                mealPreference: 'Standard Meals',
                name: 'Ganesha',
                passport: 'Z123456',
                seatNo: 2,
                splRequest: '',
                shoppedItems: []
            }
        ];
        const result = component.checkInBg(1);
        expect(result).toEqual({ 'background-color': 'transparent', cursor: 'pointer' });
    });
    it("should render a wheelchair image if the passenger's spl request has wheelchair", () => {
        component.seats = [
            {
                address: '1,ABC,Chennai',
                ancillaryServices: ['Sandwiches', 'Snacks'],
                checkedIn: false,
                dateOfBirth: new Date(),
                mealPreference: 'Standard Meals',
                name: 'Ganesha',
                passport: 'Z123456',
                seatNo: 1,
                splRequest: 'WheelChair',
                shoppedItems: []
            },
            {
                address: '1,ABC,Chennai',
                ancillaryServices: ['Sandwiches', 'Snacks'],
                checkedIn: true,
                dateOfBirth: new Date(),
                mealPreference: 'Standard Meals',
                name: 'Ganesha',
                passport: 'Z123456',
                seatNo: 2,
                splRequest: '',
                shoppedItems: []
            }
        ];
        const result = component.getSeatImage(1);
        expect(result).toContain('WheelChair');
    });
    it('should render a Infant image if the passenger has an infant', () => {
        component.seats = [
            {
                address: '1,ABC,Chennai',
                ancillaryServices: ['Sandwiches', 'Snacks'],
                checkedIn: false,
                dateOfBirth: new Date(),
                mealPreference: 'Standard Meals',
                name: 'Ganesha',
                passport: 'Z123456',
                seatNo: 1,
                splRequest: 'Infant',
                shoppedItems: []
            },
            {
                address: '1,ABC,Chennai',
                ancillaryServices: ['Sandwiches', 'Snacks'],
                checkedIn: true,
                dateOfBirth: new Date(),
                mealPreference: 'Standard Meals',
                name: 'Ganesha',
                passport: 'Z123456',
                seatNo: 2,
                splRequest: '',
                shoppedItems: []
            }
        ];
        const result = component.getSeatImage(1);
        expect(result).toContain('Infant');
    });
    it('should render a default passenger image if the passenger has no spl request', () => {
        component.seats = [
            {
                address: '1,ABC,Chennai',
                ancillaryServices: ['Sandwiches', 'Snacks'],
                checkedIn: false,
                dateOfBirth: new Date(),
                mealPreference: 'Standard Meals',
                name: 'Ganesha',
                passport: 'Z123456',
                seatNo: 1,
                splRequest: 'Infant',
                shoppedItems: []
            },
            {
                address: '1,ABC,Chennai',
                ancillaryServices: ['Sandwiches', 'Snacks'],
                checkedIn: true,
                dateOfBirth: new Date(),
                mealPreference: 'Standard Meals',
                name: 'Ganesha',
                passport: 'Z123456',
                seatNo: 2,
                splRequest: '',
                shoppedItems: []
            }
        ];
        const result = component.getSeatImage(2);
        expect(result).toContain('Passenger');
    });
    it('should render a seat image if there is no passenger for that seat', () => {
        component.seats = [
            {
                address: '1,ABC,Chennai',
                ancillaryServices: ['Sandwiches', 'Snacks'],
                checkedIn: false,
                dateOfBirth: new Date(),
                mealPreference: 'Standard Meals',
                name: 'Ganesha',
                passport: 'Z123456',
                seatNo: 1,
                splRequest: 'Infant',
                shoppedItems: []
            },
            {
                address: '1,ABC,Chennai',
                ancillaryServices: ['Sandwiches', 'Snacks'],
                checkedIn: true,
                dateOfBirth: new Date(),
                mealPreference: 'Standard Meals',
                name: 'Ganesha',
                passport: 'Z123456',
                seatNo: 2,
                splRequest: '',
                shoppedItems: []
            }
        ];
        const result = component.getSeatImage(3);
        expect(result).toContain('Arm');
    });
});
=======
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatsComponent } from './seats.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('SeatsComponent', () => {
    let component: SeatsComponent;
    let fixture: ComponentFixture<SeatsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule, HttpClientTestingModule],
            declarations: [SeatsComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SeatsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should check-in passenger on clicking the respective seat number', () => {
        component.seats = [
            {
                address: '1,ABC,Chennai',
                ancillaryServices: ['Sandwiches', 'Snacks'],
                checkedIn: false,
                dateOfBirth: new Date(),
                mealPreference: 'Standard Meals',
                name: 'Ganesha',
                passport: 'Z123456',
                seatNo: 1,
                splRequest: '',
                shoppedItems: []
            },
            {
                address: '1,ABC,Chennai',
                ancillaryServices: ['Sandwiches', 'Snacks'],
                checkedIn: true,
                dateOfBirth: new Date(),
                mealPreference: 'Standard Meals',
                name: 'Ganesha',
                passport: 'Z123456',
                seatNo: 2,
                splRequest: '',
                shoppedItems: []
            }
        ];
        component.onSeatClick(1);
        expect(component.seats[0].checkedIn).toEqual(true);
    });
    it('should render a colored background if the passenger has already checked in', () => {
        component.seats = [
            {
                address: '1,ABC,Chennai',
                ancillaryServices: ['Sandwiches', 'Snacks'],
                checkedIn: false,
                dateOfBirth: new Date(),
                mealPreference: 'Standard Meals',
                name: 'Ganesha',
                passport: 'Z123456',
                seatNo: 1,
                splRequest: '',
                shoppedItems: []
            },
            {
                address: '1,ABC,Chennai',
                ancillaryServices: ['Sandwiches', 'Snacks'],
                checkedIn: true,
                dateOfBirth: new Date(),
                mealPreference: 'Standard Meals',
                name: 'Ganesha',
                passport: 'Z123456',
                seatNo: 2,
                splRequest: '',
                shoppedItems: []
            }
        ];
        const result = component.checkInBg(2);
        expect(result).toEqual({ 'background-color': '#6dc665', cursor: 'pointer' });
    });
    it('should render a transparent background if the passenger is yet to check in', () => {
        component.seats = [
            {
                address: '1,ABC,Chennai',
                ancillaryServices: ['Sandwiches', 'Snacks'],
                checkedIn: false,
                dateOfBirth: new Date(),
                mealPreference: 'Standard Meals',
                name: 'Ganesha',
                passport: 'Z123456',
                seatNo: 1,
                splRequest: '',
                shoppedItems: []
            },
            {
                address: '1,ABC,Chennai',
                ancillaryServices: ['Sandwiches', 'Snacks'],
                checkedIn: true,
                dateOfBirth: new Date(),
                mealPreference: 'Standard Meals',
                name: 'Ganesha',
                passport: 'Z123456',
                seatNo: 2,
                splRequest: '',
                shoppedItems: []
            }
        ];
        const result = component.checkInBg(1);
        expect(result).toEqual({ 'background-color': 'transparent', cursor: 'pointer' });
    });
    it("should render a wheelchair image if the passenger's spl request has wheelchair", () => {
        component.seats = [
            {
                address: '1,ABC,Chennai',
                ancillaryServices: ['Sandwiches', 'Snacks'],
                checkedIn: false,
                dateOfBirth: new Date(),
                mealPreference: 'Standard Meals',
                name: 'Ganesha',
                passport: 'Z123456',
                seatNo: 1,
                splRequest: 'WheelChair',
                shoppedItems: []
            },
            {
                address: '1,ABC,Chennai',
                ancillaryServices: ['Sandwiches', 'Snacks'],
                checkedIn: true,
                dateOfBirth: new Date(),
                mealPreference: 'Standard Meals',
                name: 'Ganesha',
                passport: 'Z123456',
                seatNo: 2,
                splRequest: '',
                shoppedItems: []
            }
        ];
        const result = component.getSeatImage(1);
        expect(result).toContain('WheelChair');
    });
    it('should render a Infant image if the passenger has an infant', () => {
        component.seats = [
            {
                address: '1,ABC,Chennai',
                ancillaryServices: ['Sandwiches', 'Snacks'],
                checkedIn: false,
                dateOfBirth: new Date(),
                mealPreference: 'Standard Meals',
                name: 'Ganesha',
                passport: 'Z123456',
                seatNo: 1,
                splRequest: 'Infant',
                shoppedItems: []
            },
            {
                address: '1,ABC,Chennai',
                ancillaryServices: ['Sandwiches', 'Snacks'],
                checkedIn: true,
                dateOfBirth: new Date(),
                mealPreference: 'Standard Meals',
                name: 'Ganesha',
                passport: 'Z123456',
                seatNo: 2,
                splRequest: '',
                shoppedItems: []
            }
        ];
        const result = component.getSeatImage(1);
        expect(result).toContain('Infant');
    });
    it('should render a default passenger image if the passenger has no spl request', () => {
        component.seats = [
            {
                address: '1,ABC,Chennai',
                ancillaryServices: ['Sandwiches', 'Snacks'],
                checkedIn: false,
                dateOfBirth: new Date(),
                mealPreference: 'Standard Meals',
                name: 'Ganesha',
                passport: 'Z123456',
                seatNo: 1,
                splRequest: 'Infant',
                shoppedItems: []
            },
            {
                address: '1,ABC,Chennai',
                ancillaryServices: ['Sandwiches', 'Snacks'],
                checkedIn: true,
                dateOfBirth: new Date(),
                mealPreference: 'Standard Meals',
                name: 'Ganesha',
                passport: 'Z123456',
                seatNo: 2,
                splRequest: '',
                shoppedItems: []
            }
        ];
        const result = component.getSeatImage(2);
        expect(result).toContain('Passenger');
    });
    it('should render a seat image if there is no passenger for that seat', () => {
        component.seats = [
            {
                address: '1,ABC,Chennai',
                ancillaryServices: ['Sandwiches', 'Snacks'],
                checkedIn: false,
                dateOfBirth: new Date(),
                mealPreference: 'Standard Meals',
                name: 'Ganesha',
                passport: 'Z123456',
                seatNo: 1,
                splRequest: 'Infant',
                shoppedItems: []
            },
            {
                address: '1,ABC,Chennai',
                ancillaryServices: ['Sandwiches', 'Snacks'],
                checkedIn: true,
                dateOfBirth: new Date(),
                mealPreference: 'Standard Meals',
                name: 'Ganesha',
                passport: 'Z123456',
                seatNo: 2,
                splRequest: '',
                shoppedItems: []
            }
        ];
        const result = component.getSeatImage(3);
        expect(result).toContain('Arm');
    });
});
>>>>>>> 997f8ec91f9e1cbd54fdc4920c39ca44f314f432
