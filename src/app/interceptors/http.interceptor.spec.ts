import { TestBed } from '@angular/core/testing';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { HttpInterceptorService } from './http.interceptor';

describe('HttpInterceptorService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            providers: [
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: HttpInterceptorService,
                    multi: true
                }
            ]
        });
    });

    it('should be created', () => {
        const interceptor = TestBed.inject(HttpInterceptorService);
        expect(interceptor).toBeTruthy();
    });
});
