<<<<<<< HEAD

import { TestBed, inject } from '@angular/core/testing';

import { AdminService } from './admin.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('AdminService', () => {
    let service: AdminService;

    beforeEach(() => {
        TestBed.configureTestingModule({ imports: [], providers: [provideHttpClient(withInterceptorsFromDi())] });
        service = TestBed.inject(AdminService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
    it('should be initialized', inject([AdminService], (adminService: AdminService) => {
      expect(adminService).toBeTruthy();
    }));
=======
import { TestBed, inject } from '@angular/core/testing';

import { AdminService } from './admin.service';
import { HttpClientModule } from '@angular/common/http';

describe('AdminService', () => {
    let service: AdminService;

    beforeEach(() => {
        TestBed.configureTestingModule({ imports: [HttpClientModule] });
        service = TestBed.inject(AdminService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
    it('should be initialized', inject([AdminService], (adminService: AdminService) => {
        expect(adminService).toBeTruthy();
    }));
>>>>>>> 997f8ec91f9e1cbd54fdc4920c39ca44f314f432
});
