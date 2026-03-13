<<<<<<< HEAD

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { InFlightComponent } from './in-flight.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('InFlightComponent', () => {
    let component: InFlightComponent;
    let fixture: ComponentFixture<InFlightComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
    declarations: [InFlightComponent],
    imports: [RouterTestingModule, FormsModule],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
}).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(InFlightComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render a colored background if the passenger is selected', () => {
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
        component.seatClicked = 2;
        const result = component.checkInBg(2);
        expect(result).toEqual({ 'background-color': 'grey', cursor: 'pointer' });
    });
    it('should render a transparent background if the passenger is deselected', () => {
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
        component.seatClicked = 2;
        component.onSeatClick(2);
        const result = component.checkInBg(2);
        expect(result).toEqual({ 'background-color': 'transparent', cursor: 'pointer' });
    });
    it('should render a pink image if the passenger has opted for special meals', () => {
        component.seats = [
            {
                address: '1,ABC,Chennai',
                ancillaryServices: ['Sandwiches', 'Snacks'],
                checkedIn: false,
                dateOfBirth: new Date(),
                mealPreference: 'Special Meals',
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
        expect(result).toContain('spl');
    });
    it('should render a green image if the passenger has not opted for special meals', () => {
        component.seats = [
            {
                address: '1,ABC,Chennai',
                ancillaryServices: ['Sandwiches', 'Snacks'],
                checkedIn: false,
                dateOfBirth: new Date(),
                mealPreference: 'Special Meals',
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
        const result = component.getSeatImage(2);
        expect(result).toContain('Std');
    });
    it('should render a default seat image if the there is no passenger for the selected seat', () => {
        component.seats = [
            {
                address: '1,ABC,Chennai',
                ancillaryServices: ['Sandwiches', 'Snacks'],
                checkedIn: false,
                dateOfBirth: new Date(),
                mealPreference: 'Special Meals',
                name: 'Ganesha',
                passport: 'Z123456',
                seatNo: 1,
                splRequest: 'WheelChair',
                shoppedItems: []
            }
        ];
        const result = component.getSeatImage(3);
        expect(result).toContain('Arm');
    });
    it('should not allow passenger to select ancillary services that are already selected', () => {
        component.passenger = {
            address: '1,ABC,Chennai',
            ancillaryServices: ['Sandwiches', 'Snacks'],
            checkedIn: false,
            dateOfBirth: new Date(),
            mealPreference: 'Special Meals',
            name: 'Ganesha',
            passport: 'Z123456',
            seatNo: 1,
            splRequest: 'WheelChair',
            shoppedItems: []
        };
        component.ancillaryServices = ['Sandwiches', 'Snacks'];
        const result = component.checkService(1, 'ancillary');
        expect(result).toEqual({ cursor: 'not-allowed' });
    });
    it('should allow passenger to select ancillary services that are not already selected', () => {
        component.passenger = {
            address: '1,ABC,Chennai',
            ancillaryServices: ['Sandwiches'],
            checkedIn: false,
            dateOfBirth: new Date(),
            mealPreference: 'Special Meals',
            name: 'Ganesha',
            passport: 'Z123456',
            seatNo: 1,
            splRequest: 'WheelChair',
            shoppedItems: []
        };
        component.ancillaryServices = ['Sandwiches', 'Snacks'];
        const result = component.checkService(1, 'ancillary');
        expect(result).toEqual({ cursor: 'pointer' });
    });
    it('should not allow passenger to select items that are shopped already', () => {
        component.passenger = {
            address: '1,ABC,Chennai',
            ancillaryServices: ['Sandwiches', 'Snacks'],
            checkedIn: false,
            dateOfBirth: new Date(),
            mealPreference: 'Special Meals',
            name: 'Ganesha',
            passport: 'Z123456',
            seatNo: 1,
            splRequest: 'WheelChair',
            shoppedItems: ['Sandwiches', 'Snacks']
        };
        component.shoppingList = ['Sandwiches', 'Snacks'];
        const result = component.checkService(1, 'shopping');
        expect(result).toEqual({ cursor: 'not-allowed' });
    });
    it('should allow passenger to shop items that are not already selected', () => {
        component.passenger = {
            address: '1,ABC,Chennai',
            ancillaryServices: ['Sandwiches'],
            checkedIn: false,
            dateOfBirth: new Date(),
            mealPreference: 'Special Meals',
            name: 'Ganesha',
            passport: 'Z123456',
            seatNo: 1,
            splRequest: 'WheelChair',
            shoppedItems: ['Sandwiches']
        };
        component.ancillaryServices = ['Sandwiches', 'Snacks'];
        const result = component.checkService(1, 'shopping');
        expect(result).toEqual({ cursor: 'pointer' });
    });
    it("should not add service to passenger's ancillary services that are already selected", () => {
        component.passenger = {
            address: '1,ABC,Chennai',
            ancillaryServices: ['Sandwiches', 'Snacks'],
            checkedIn: false,
            dateOfBirth: new Date(),
            mealPreference: 'Special Meals',
            name: 'Ganesha',
            passport: 'Z123456',
            seatNo: 1,
            splRequest: 'WheelChair',
            shoppedItems: []
        };
        const lengthBefore = component.passenger.ancillaryServices.length;
        component.ancillaryServices = ['Sandwiches', 'Snacks'];
        component.onServiceAdd(1, 'ancillary');
        const lengthAfter = component.passenger.ancillaryServices.length;
        expect(lengthBefore).toEqual(lengthAfter);
    });
    it("should add selected service to passenger's ancillary services", () => {
        component.passenger = {
            address: '1,ABC,Chennai',
            ancillaryServices: ['Sandwiches'],
            checkedIn: false,
            dateOfBirth: new Date(),
            mealPreference: 'Special Meals',
            name: 'Ganesha',
            passport: 'Z123456',
            seatNo: 1,
            splRequest: 'WheelChair',
            shoppedItems: []
        };
        const lengthBefore = component.passenger.ancillaryServices.length;
        component.ancillaryServices = ['Sandwiches', 'Snacks'];
        component.onServiceAdd(1, 'ancillary');
        const lengthAfter = component.passenger.ancillaryServices.length;
        expect(lengthBefore + 1).toEqual(lengthAfter);
    });
    it("should not add service to passenger's shopping list that are already shopped", () => {
        component.passenger = {
            address: '1,ABC,Chennai',
            ancillaryServices: ['Sandwiches', 'Snacks'],
            checkedIn: false,
            dateOfBirth: new Date(),
            mealPreference: 'Special Meals',
            name: 'Ganesha',
            passport: 'Z123456',
            seatNo: 1,
            splRequest: 'WheelChair',
            shoppedItems: ['Sandwiches', 'Snacks']
        };
        const lengthBefore = component.passenger.ancillaryServices.length;
        component.shoppingList = ['Sandwiches', 'Snacks'];
        component.onServiceAdd(1, 'shopping');
        const lengthAfter = component.passenger.ancillaryServices.length;
        expect(lengthBefore).toEqual(lengthAfter);
    });
    it("should add selected service to passenger's shopping list", () => {
        component.passenger = {
            address: '1,ABC,Chennai',
            ancillaryServices: ['Sandwiches'],
            checkedIn: false,
            dateOfBirth: new Date(),
            mealPreference: 'Special Meals',
            name: 'Ganesha',
            passport: 'Z123456',
            seatNo: 1,
            splRequest: 'WheelChair',
            shoppedItems: ['Sandwiches']
        };
        const lengthBefore = component.passenger.ancillaryServices.length;
        component.shoppingList = ['Sandwiches', 'Snacks'];
        component.onServiceAdd(1, 'shopping');
        const lengthAfter = component.passenger.ancillaryServices.length;
        expect(lengthBefore).toEqual(lengthAfter);
    });
    it("should remove selected service from passenger's ancillary services", () => {
        component.passenger = {
            address: '1,ABC,Chennai',
            ancillaryServices: ['Sandwiches'],
            checkedIn: false,
            dateOfBirth: new Date(),
            mealPreference: 'Special Meals',
            name: 'Ganesha',
            passport: 'Z123456',
            seatNo: 1,
            splRequest: 'WheelChair',
            shoppedItems: []
        };
        const lengthBefore = component.passenger.ancillaryServices.length;
        component.ancillaryServices = ['Sandwiches', 'Snacks'];
        component.onServiceRemove(0, 'ancillary');
        const lengthAfter = component.passenger.ancillaryServices.length;
        expect(lengthBefore - 1).toEqual(lengthAfter);
    });
    it("should remove service from passenger's shopping list", () => {
        component.passenger = {
            address: '1,ABC,Chennai',
            ancillaryServices: ['Sandwiches', 'Snacks'],
            checkedIn: false,
            dateOfBirth: new Date(),
            mealPreference: 'Special Meals',
            name: 'Ganesha',
            passport: 'Z123456',
            seatNo: 1,
            splRequest: 'WheelChair',
            shoppedItems: ['Sandwiches', 'Snacks']
        };
        const lengthBefore = component.passenger.ancillaryServices.length;
        component.shoppingList = ['Sandwiches', 'Snacks'];
        component.onServiceRemove(0, 'shopping');
        const lengthAfter = component.passenger.shoppedItems.length;
        expect(lengthBefore - 1).toEqual(lengthAfter);
    });
});
=======
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { InFlightComponent } from './in-flight.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

describe('InFlightComponent', () => {
    let component: InFlightComponent;
    let fixture: ComponentFixture<InFlightComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule, HttpClientTestingModule, FormsModule],
            declarations: [InFlightComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(InFlightComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render a colored background if the passenger is selected', () => {
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
        component.seatClicked = 2;
        const result = component.checkInBg(2);
        expect(result).toEqual({ 'background-color': 'grey', cursor: 'pointer' });
    });
    it('should render a transparent background if the passenger is deselected', () => {
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
        component.seatClicked = 2;
        component.onSeatClick(2);
        const result = component.checkInBg(2);
        expect(result).toEqual({ 'background-color': 'transparent', cursor: 'pointer' });
    });
    it('should render a pink image if the passenger has opted for special meals', () => {
        component.seats = [
            {
                address: '1,ABC,Chennai',
                ancillaryServices: ['Sandwiches', 'Snacks'],
                checkedIn: false,
                dateOfBirth: new Date(),
                mealPreference: 'Special Meals',
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
        expect(result).toContain('spl');
    });
    it('should render a green image if the passenger has not opted for special meals', () => {
        component.seats = [
            {
                address: '1,ABC,Chennai',
                ancillaryServices: ['Sandwiches', 'Snacks'],
                checkedIn: false,
                dateOfBirth: new Date(),
                mealPreference: 'Special Meals',
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
        const result = component.getSeatImage(2);
        expect(result).toContain('Std');
    });
    it('should render a default seat image if the there is no passenger for the selected seat', () => {
        component.seats = [
            {
                address: '1,ABC,Chennai',
                ancillaryServices: ['Sandwiches', 'Snacks'],
                checkedIn: false,
                dateOfBirth: new Date(),
                mealPreference: 'Special Meals',
                name: 'Ganesha',
                passport: 'Z123456',
                seatNo: 1,
                splRequest: 'WheelChair',
                shoppedItems: []
            }
        ];
        const result = component.getSeatImage(3);
        expect(result).toContain('Arm');
    });
    it('should not allow passenger to select ancillary services that are already selected', () => {
        component.passenger = {
            address: '1,ABC,Chennai',
            ancillaryServices: ['Sandwiches', 'Snacks'],
            checkedIn: false,
            dateOfBirth: new Date(),
            mealPreference: 'Special Meals',
            name: 'Ganesha',
            passport: 'Z123456',
            seatNo: 1,
            splRequest: 'WheelChair',
            shoppedItems: []
        };
        component.ancillaryServices = ['Sandwiches', 'Snacks'];
        const result = component.checkService(1, 'ancillary');
        expect(result).toEqual({ cursor: 'not-allowed' });
    });
    it('should allow passenger to select ancillary services that are not already selected', () => {
        component.passenger = {
            address: '1,ABC,Chennai',
            ancillaryServices: ['Sandwiches'],
            checkedIn: false,
            dateOfBirth: new Date(),
            mealPreference: 'Special Meals',
            name: 'Ganesha',
            passport: 'Z123456',
            seatNo: 1,
            splRequest: 'WheelChair',
            shoppedItems: []
        };
        component.ancillaryServices = ['Sandwiches', 'Snacks'];
        const result = component.checkService(1, 'ancillary');
        expect(result).toEqual({ cursor: 'pointer' });
    });
    it('should not allow passenger to select items that are shopped already', () => {
        component.passenger = {
            address: '1,ABC,Chennai',
            ancillaryServices: ['Sandwiches', 'Snacks'],
            checkedIn: false,
            dateOfBirth: new Date(),
            mealPreference: 'Special Meals',
            name: 'Ganesha',
            passport: 'Z123456',
            seatNo: 1,
            splRequest: 'WheelChair',
            shoppedItems: ['Sandwiches', 'Snacks']
        };
        component.shoppingList = ['Sandwiches', 'Snacks'];
        const result = component.checkService(1, 'shopping');
        expect(result).toEqual({ cursor: 'not-allowed' });
    });
    it('should allow passenger to shop items that are not already selected', () => {
        component.passenger = {
            address: '1,ABC,Chennai',
            ancillaryServices: ['Sandwiches'],
            checkedIn: false,
            dateOfBirth: new Date(),
            mealPreference: 'Special Meals',
            name: 'Ganesha',
            passport: 'Z123456',
            seatNo: 1,
            splRequest: 'WheelChair',
            shoppedItems: ['Sandwiches']
        };
        component.ancillaryServices = ['Sandwiches', 'Snacks'];
        const result = component.checkService(1, 'shopping');
        expect(result).toEqual({ cursor: 'pointer' });
    });
    it("should not add service to passenger's ancillary services that are already selected", () => {
        component.passenger = {
            address: '1,ABC,Chennai',
            ancillaryServices: ['Sandwiches', 'Snacks'],
            checkedIn: false,
            dateOfBirth: new Date(),
            mealPreference: 'Special Meals',
            name: 'Ganesha',
            passport: 'Z123456',
            seatNo: 1,
            splRequest: 'WheelChair',
            shoppedItems: []
        };
        const lengthBefore = component.passenger.ancillaryServices.length;
        component.ancillaryServices = ['Sandwiches', 'Snacks'];
        component.onServiceAdd(1, 'ancillary');
        const lengthAfter = component.passenger.ancillaryServices.length;
        expect(lengthBefore).toEqual(lengthAfter);
    });
    it("should add selected service to passenger's ancillary services", () => {
        component.passenger = {
            address: '1,ABC,Chennai',
            ancillaryServices: ['Sandwiches'],
            checkedIn: false,
            dateOfBirth: new Date(),
            mealPreference: 'Special Meals',
            name: 'Ganesha',
            passport: 'Z123456',
            seatNo: 1,
            splRequest: 'WheelChair',
            shoppedItems: []
        };
        const lengthBefore = component.passenger.ancillaryServices.length;
        component.ancillaryServices = ['Sandwiches', 'Snacks'];
        component.onServiceAdd(1, 'ancillary');
        const lengthAfter = component.passenger.ancillaryServices.length;
        expect(lengthBefore + 1).toEqual(lengthAfter);
    });
    it("should not add service to passenger's shopping list that are already shopped", () => {
        component.passenger = {
            address: '1,ABC,Chennai',
            ancillaryServices: ['Sandwiches', 'Snacks'],
            checkedIn: false,
            dateOfBirth: new Date(),
            mealPreference: 'Special Meals',
            name: 'Ganesha',
            passport: 'Z123456',
            seatNo: 1,
            splRequest: 'WheelChair',
            shoppedItems: ['Sandwiches', 'Snacks']
        };
        const lengthBefore = component.passenger.ancillaryServices.length;
        component.shoppingList = ['Sandwiches', 'Snacks'];
        component.onServiceAdd(1, 'shopping');
        const lengthAfter = component.passenger.ancillaryServices.length;
        expect(lengthBefore).toEqual(lengthAfter);
    });
    it("should add selected service to passenger's shopping list", () => {
        component.passenger = {
            address: '1,ABC,Chennai',
            ancillaryServices: ['Sandwiches'],
            checkedIn: false,
            dateOfBirth: new Date(),
            mealPreference: 'Special Meals',
            name: 'Ganesha',
            passport: 'Z123456',
            seatNo: 1,
            splRequest: 'WheelChair',
            shoppedItems: ['Sandwiches']
        };
        const lengthBefore = component.passenger.ancillaryServices.length;
        component.shoppingList = ['Sandwiches', 'Snacks'];
        component.onServiceAdd(1, 'shopping');
        const lengthAfter = component.passenger.ancillaryServices.length;
        expect(lengthBefore).toEqual(lengthAfter);
    });
    it("should remove selected service from passenger's ancillary services", () => {
        component.passenger = {
            address: '1,ABC,Chennai',
            ancillaryServices: ['Sandwiches'],
            checkedIn: false,
            dateOfBirth: new Date(),
            mealPreference: 'Special Meals',
            name: 'Ganesha',
            passport: 'Z123456',
            seatNo: 1,
            splRequest: 'WheelChair',
            shoppedItems: []
        };
        const lengthBefore = component.passenger.ancillaryServices.length;
        component.ancillaryServices = ['Sandwiches', 'Snacks'];
        component.onServiceRemove(0, 'ancillary');
        const lengthAfter = component.passenger.ancillaryServices.length;
        expect(lengthBefore - 1).toEqual(lengthAfter);
    });
    it("should remove service from passenger's shopping list", () => {
        component.passenger = {
            address: '1,ABC,Chennai',
            ancillaryServices: ['Sandwiches', 'Snacks'],
            checkedIn: false,
            dateOfBirth: new Date(),
            mealPreference: 'Special Meals',
            name: 'Ganesha',
            passport: 'Z123456',
            seatNo: 1,
            splRequest: 'WheelChair',
            shoppedItems: ['Sandwiches', 'Snacks']
        };
        const lengthBefore = component.passenger.ancillaryServices.length;
        component.shoppingList = ['Sandwiches', 'Snacks'];
        component.onServiceRemove(0, 'shopping');
        const lengthAfter = component.passenger.shoppedItems.length;
        expect(lengthBefore - 1).toEqual(lengthAfter);
    });
});
>>>>>>> 997f8ec91f9e1cbd54fdc4920c39ca44f314f432
