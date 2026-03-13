<<<<<<< HEAD

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengersComponent } from './passengers.component';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PassengerFilterPipe } from './passenger-filter.pipe';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('PassengersComponent', () => {
    let component: PassengersComponent;
    let fixture: ComponentFixture<PassengersComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
    declarations: [PassengersComponent, PassengerFilterPipe],
    imports: [RouterTestingModule, FormsModule],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
}).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PassengersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
=======
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengersComponent } from './passengers.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PassengerFilterPipe } from './passenger-filter.pipe';
import { FormsModule } from '@angular/forms';

describe('PassengersComponent', () => {
    let component: PassengersComponent;
    let fixture: ComponentFixture<PassengersComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule, HttpClientTestingModule, FormsModule],
            declarations: [PassengersComponent, PassengerFilterPipe]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PassengersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
>>>>>>> 997f8ec91f9e1cbd54fdc4920c39ca44f314f432
