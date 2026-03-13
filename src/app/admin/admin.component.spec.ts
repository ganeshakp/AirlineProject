<<<<<<< HEAD

=======
>>>>>>> 997f8ec91f9e1cbd54fdc4920c39ca44f314f432
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComponent } from './admin.component';
import { RouterTestingModule } from '@angular/router/testing';
<<<<<<< HEAD
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('AdminComponent', () => {
    let component: AdminComponent;
    let fixture: ComponentFixture<AdminComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
    declarations: [AdminComponent],
    imports: [RouterTestingModule],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
}).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AdminComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('should render a div with col-md-4 class', () => {
        const fixture = TestBed.createComponent(AdminComponent);
        fixture.detectChanges();
        const div: HTMLElement = fixture.nativeElement.querySelector('div');
        expect(div?.className).toContain('col-md-4');
    });
    it('should render a div with class col-md-8', () => {
        const fixture = TestBed.createComponent(AdminComponent);
        fixture.detectChanges();
        const div: HTMLElement[] = fixture.nativeElement.querySelectorAll('div');
        const innerdiv = div[1];
        expect(innerdiv?.className).toContain('col-md-8');
    });
});
=======
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AdminComponent', () => {
    let component: AdminComponent;
    let fixture: ComponentFixture<AdminComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule, HttpClientTestingModule],
            declarations: [AdminComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AdminComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('should render a div with col-md-4 class', () => {
        const fixture = TestBed.createComponent(AdminComponent);
        fixture.detectChanges();
        const div: HTMLElement = fixture.nativeElement.querySelector('div');
        expect(div?.className).toContain('col-md-4');
    });
    it('should render a div with class col-md-8', () => {
        const fixture = TestBed.createComponent(AdminComponent);
        fixture.detectChanges();
        const div: HTMLElement[] = fixture.nativeElement.querySelectorAll('div');
        const innerdiv = div[1];
        expect(innerdiv?.className).toContain('col-md-8');
    });
});
>>>>>>> 997f8ec91f9e1cbd54fdc4920c39ca44f314f432
