import { TestBed, inject } from '@angular/core/testing';
import { EnrollmentGuard } from './enrollment.guard';
describe('EnrollmentGuard', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [EnrollmentGuard]
        });
    });
    it('should ...', inject([EnrollmentGuard], function (guard) {
        expect(guard).toBeTruthy();
    }));
});
//# sourceMappingURL=enrollment.guard.spec.js.map