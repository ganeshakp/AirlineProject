import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesComponent } from './services.component';
<<<<<<< HEAD
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('ServicesComponent', () => {
    let component: ServicesComponent;
    let fixture: ComponentFixture<ServicesComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
    declarations: [ServicesComponent],
    imports: [RouterTestingModule, FormsModule],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
}).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ServicesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('selected passenger should be empty', () => {
      expect(component.selectedPassenger).toEqual(undefined);
  });
    it('should add ancillary services if not present already', () => {
        component.ancillaryText = 'test';
        component.ancillaryServices = [];
        component.ancillaryClick();
        expect(component.ancillaryServices).toEqual(['test']);
    });
    it('should not add ancillary services if  present already', () => {
        component.ancillaryText = 'test';
        component.ancillaryServices = ['test'];
        component.ancillaryClick();
        expect(component.ancillaryServices).toEqual(['test']);
    });
    it('should add shopping item if not present already', () => {
        component.shoppingItemsText = 'test';
        component.shoppingServices = [];
        component.shoppingClick();
        expect(component.shoppingServices).toEqual(['test']);
    });
    it('should not add shopping item if  present already', () => {
        component.shoppingItemsText = 'test';
        component.shoppingServices = ['test'];
        component.shoppingClick();
        expect(component.shoppingServices).toEqual(['test']);
    });
    it('should add meal if not present already', () => {
        component.mealText = 'test';
        component.mealServices = [];
        component.mealsClick();
        expect(component.mealServices).toEqual(['test']);
    });
    it('should not add meal if  present already', () => {
        component.mealText = 'test';
        component.mealServices = ['test'];
        component.mealsClick();
        expect(component.mealServices).toEqual(['test']);
    });
    it('should not REMOVE meal if passenger opted for it already', () => {
        component.deleteCheck = ['test'];
        component.mealServices = ['test'];
        component.removeItem('test', 'meal');
        expect(component.mealServices).toEqual(['test']);
    });
    it('should not REMOVE ancillary service if passenger opted for it already', () => {
        component.deleteCheck = ['test'];
        component.ancillaryServices = ['test'];
        component.removeItem('test', 'ancillary');
        expect(component.ancillaryServices).toEqual(['test']);
    });
    it('should not REMOVE shopping service if passenger opted for it already', () => {
        component.deleteCheck = ['test'];
        component.shoppingServices = ['test'];
        component.removeItem('test', 'shopping');
        expect(component.shoppingServices).toEqual(['test']);
    });
});
=======
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

describe('ServicesComponent', () => {
    let component: ServicesComponent;
    let fixture: ComponentFixture<ServicesComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule, HttpClientTestingModule, FormsModule],
            declarations: [ServicesComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ServicesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('selected passenger should be empty', () => {
        expect(component.selectedPassenger).toEqual(undefined);
    });
    it('should add ancillary services if not present already', () => {
        component.ancillaryText = 'test';
        component.ancillaryServices = [];
        component.ancillaryClick();
        expect(component.ancillaryServices).toEqual(['test']);
    });
    it('should not add ancillary services if  present already', () => {
        component.ancillaryText = 'test';
        component.ancillaryServices = ['test'];
        component.ancillaryClick();
        expect(component.ancillaryServices).toEqual(['test']);
    });
    it('should add shopping item if not present already', () => {
        component.shoppingItemsText = 'test';
        component.shoppingServices = [];
        component.shoppingClick();
        expect(component.shoppingServices).toEqual(['test']);
    });
    it('should not add shopping item if  present already', () => {
        component.shoppingItemsText = 'test';
        component.shoppingServices = ['test'];
        component.shoppingClick();
        expect(component.shoppingServices).toEqual(['test']);
    });
    it('should add meal if not present already', () => {
        component.mealText = 'test';
        component.mealServices = [];
        component.mealsClick();
        expect(component.mealServices).toEqual(['test']);
    });
    it('should not add meal if  present already', () => {
        component.mealText = 'test';
        component.mealServices = ['test'];
        component.mealsClick();
        expect(component.mealServices).toEqual(['test']);
    });
    it('should not REMOVE meal if passenger opted for it already', () => {
        component.deleteCheck = ['test'];
        component.mealServices = ['test'];
        component.removeItem('test', 'meal');
        expect(component.mealServices).toEqual(['test']);
    });
    it('should not REMOVE ancillary service if passenger opted for it already', () => {
        component.deleteCheck = ['test'];
        component.ancillaryServices = ['test'];
        component.removeItem('test', 'ancillary');
        expect(component.ancillaryServices).toEqual(['test']);
    });
    it('should not REMOVE shopping service if passenger opted for it already', () => {
        component.deleteCheck = ['test'];
        component.shoppingServices = ['test'];
        component.removeItem('test', 'shopping');
        expect(component.shoppingServices).toEqual(['test']);
    });
});
>>>>>>> 997f8ec91f9e1cbd54fdc4920c39ca44f314f432
