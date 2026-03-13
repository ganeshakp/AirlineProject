import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertComponent } from './alert.component';
import { SeatsComponent } from 'src/app/staff/check-in/seats/seats.component';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
<<<<<<< HEAD
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('AlertComponent', () => {
    let component: AlertComponent;
    let fixture: ComponentFixture<AlertComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
    declarations: [AlertComponent],
    imports: [RouterTestingModule],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
}).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AlertComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render when there is a input message', () => {
        const hostFixture = TestBed.createComponent(SeatsComponent);
        const hostFixtureComponent = hostFixture.componentInstance;
        hostFixtureComponent.alertMessage = 'Test';
        const getAlertElement = (): HTMLElement =>
            hostFixture.debugElement.query(By.css('.alert-box'))
                ? fixture.debugElement.query(By.css('.alert-box')).nativeElement
                : null;
        expect(getAlertElement()).toBeDefined();
    });

    it("shouldn't render when there is no input message", () => {
        const hostFixture = TestBed.createComponent(SeatsComponent);
        const hostFixtureComponent = hostFixture.componentInstance;
        hostFixtureComponent.alertMessage = '';
        const getAlertElement = (): HTMLElement =>
            hostFixture.debugElement.query(By.css('.alert-box'))
                ? fixture.debugElement.query(By.css('.alert-box')).nativeElement
                : null;
        expect(getAlertElement()).toBeNull();
    });
    it("shouldn't render when there is no input message", () => {
        const hostFixture = TestBed.createComponent(SeatsComponent);
        const hostFixtureComponent = hostFixture.componentInstance;
        hostFixtureComponent.alertMessage = 'Test';
        component.onClose();
        const getAlertElement = (): HTMLElement =>
            hostFixture.debugElement.query(By.css('.alert-box'))
                ? fixture.debugElement.query(By.css('.alert-box')).nativeElement
                : null;
        expect(getAlertElement()).toBeNull();
    });
=======
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AlertComponent', () => {
    let component: AlertComponent;
    let fixture: ComponentFixture<AlertComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule, HttpClientTestingModule],
            declarations: [AlertComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AlertComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render when there is a input message', () => {
        const hostFixture = TestBed.createComponent(SeatsComponent);
        const hostFixtureComponent = hostFixture.componentInstance;
        hostFixtureComponent.alertMessage = 'Test';
        const getAlertElement = (): HTMLElement =>
            hostFixture.debugElement.query(By.css('.alert-box'))
                ? fixture.debugElement.query(By.css('.alert-box')).nativeElement
                : null;
        expect(getAlertElement()).toBeDefined();
    });

    it("shouldn't render when there is no input message", () => {
        const hostFixture = TestBed.createComponent(SeatsComponent);
        const hostFixtureComponent = hostFixture.componentInstance;
        hostFixtureComponent.alertMessage = '';
        const getAlertElement = (): HTMLElement =>
            hostFixture.debugElement.query(By.css('.alert-box'))
                ? fixture.debugElement.query(By.css('.alert-box')).nativeElement
                : null;
        expect(getAlertElement()).toBeNull();
    });
    it("shouldn't render when there is no input message", () => {
        const hostFixture = TestBed.createComponent(SeatsComponent);
        const hostFixtureComponent = hostFixture.componentInstance;
        hostFixtureComponent.alertMessage = 'Test';
        component.onClose();
        const getAlertElement = (): HTMLElement =>
            hostFixture.debugElement.query(By.css('.alert-box'))
                ? fixture.debugElement.query(By.css('.alert-box')).nativeElement
                : null;
        expect(getAlertElement()).toBeNull();
    });
>>>>>>> 997f8ec91f9e1cbd54fdc4920c39ca44f314f432
});
