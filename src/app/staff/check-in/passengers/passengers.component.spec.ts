
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