import { TestBed } from '@angular/core/testing';
import { EnrollmentService } from './enrollment.service';
describe('EnrollmentService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(EnrollmentService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=enrollment.service.spec.js.map