import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { RouterTestingModule } from '@angular/router/testing';
<<<<<<< HEAD
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user.model';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
    declarations: [HeaderComponent],
    imports: [RouterTestingModule],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
}).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('on toggle clicked collpase to be interchanged between true and false', () => {
        component.collapsed = true;
        component.toggleCollapsed();
        fixture.detectChanges();
        expect(component.collapsed).toEqual(false);
    });
    it('user role and user authenticated', () => {
        let service = fixture.debugElement.injector.get(AuthService);
        let testUser = new User('test', '1', 'sd', new Date(), 'admin');
        service.user.next(testUser);
        component.ngOnInit();
        fixture.detectChanges();
        expect(component.userValid && component.userRole === 'admin').toEqual(true);
    });
    it('user role and user authenticated', () => {
        let service = fixture.debugElement.injector.get(AuthService);
        let testUser = new User('test', '1', 'sd', new Date(), 'staff');
        service.user.next(testUser);
        component.ngOnInit();
        fixture.detectChanges();
        expect(component.userValid && component.userRole === 'staff').toEqual(true);
    });
    it('user role and user authenticated', () => {
        let service = fixture.debugElement.injector.get(AuthService);
        let testUser = new User('test', '1', 'sd', new Date(), 'admin');
        service.user.next(testUser);
        component.ngOnInit();
        component.onLogOut();
        fixture.detectChanges();
        expect(component.userValid).toEqual(false);
    });
});
=======
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user.model';

describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule, HttpClientTestingModule],
            declarations: [HeaderComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('on toggle clicked collpase to be interchanged between true and false', () => {
        component.collapsed = true;
        component.toggleCollapsed();
        fixture.detectChanges();
        expect(component.collapsed).toEqual(false);
    });
    it('user role and user authenticated', () => {
        let service = fixture.debugElement.injector.get(AuthService);
        let testUser = new User('test', '1', 'sd', new Date(), 'admin');
        service.user.next(testUser);
        component.ngOnInit();
        fixture.detectChanges();
        expect(component.userValid && component.userRole === 'admin').toEqual(true);
    });
    it('user role and user authenticated', () => {
        let service = fixture.debugElement.injector.get(AuthService);
        let testUser = new User('test', '1', 'sd', new Date(), 'staff');
        service.user.next(testUser);
        component.ngOnInit();
        fixture.detectChanges();
        expect(component.userValid && component.userRole === 'staff').toEqual(true);
    });
    it('user role and user authenticated', () => {
        let service = fixture.debugElement.injector.get(AuthService);
        let testUser = new User('test', '1', 'sd', new Date(), 'admin');
        service.user.next(testUser);
        component.ngOnInit();
        component.onLogOut();
        fixture.detectChanges();
        expect(component.userValid).toEqual(false);
    });
});
>>>>>>> 997f8ec91f9e1cbd54fdc4920c39ca44f314f432
