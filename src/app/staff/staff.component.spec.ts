import { ComponentFixture, TestBed } from '@angular/core/testing';
<<<<<<< HEAD
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { StaffComponent } from './staff.component';
import { RouterTestingModule } from '@angular/router/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('StaffComponent', () => {
    let component: StaffComponent;
    let fixture: ComponentFixture<StaffComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
    declarations: [StaffComponent],
    imports: [RouterTestingModule],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
}).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(StaffComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
=======
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StaffComponent } from './staff.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('StaffComponent', () => {
    let component: StaffComponent;
    let fixture: ComponentFixture<StaffComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule, HttpClientTestingModule],
            declarations: [StaffComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(StaffComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
>>>>>>> 997f8ec91f9e1cbd54fdc4920c39ca44f314f432
