import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EnrollmentService } from './enrollment.service';
var enrollmentGuard = /** @class */ (function () {
    function enrollmentGuard(_enrollmentService, _router) {
        this._enrollmentService = _enrollmentService;
        this._router = _router;
    }
    enrollmentGuard.prototype.canActivate = function (next, state) {
        if (!this._enrollmentService.loggedIn()) {
            this._router.navigateByUrl('/registration');
            this._enrollmentService.deleteToken();
            return false;
        }
        return true;
    };
    enrollmentGuard = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [EnrollmentService,
            Router])
    ], enrollmentGuard);
    return enrollmentGuard;
}());
export { enrollmentGuard };
// canActivateChild(
//   next: ActivatedRouteSnapshot,
//   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//   return true;
// }
// canLoad(
//   route: Route,
//   segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
//   return true;
// }
// }
//# sourceMappingURL=enrollment.guard.js.map