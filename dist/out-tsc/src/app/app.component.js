import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { EnrollmentService } from './enrollment.service';
var AppComponent = /** @class */ (function () {
    function AppComponent(_enrollmentService) {
        this._enrollmentService = _enrollmentService;
        this.profile = JSON.parse(localStorage.getItem('profile'));
        console.log(this.profile);
    }
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [EnrollmentService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map