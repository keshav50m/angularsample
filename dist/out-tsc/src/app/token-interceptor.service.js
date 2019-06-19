import * as tslib_1 from "tslib";
import { Injectable, Injector } from '@angular/core';
import { EnrollmentService } from './enrollment.service';
var TokenInterceptorService = /** @class */ (function () {
    function TokenInterceptorService(injector) {
        this.injector = injector;
    }
    TokenInterceptorService.prototype.intercept = function (req, next) {
        var enrollmentService = this.injector.get(EnrollmentService);
        var tokenizedReq = req.clone({
            setHeaders: {
                Authorization: "Bearer " + enrollmentService.getToken()
            }
        });
        return next.handle(tokenizedReq);
    };
    TokenInterceptorService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [Injector])
    ], TokenInterceptorService);
    return TokenInterceptorService;
}());
export { TokenInterceptorService };
//# sourceMappingURL=token-interceptor.service.js.map