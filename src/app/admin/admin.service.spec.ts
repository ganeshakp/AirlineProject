
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
});
