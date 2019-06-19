import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { User } from '../user';
import { EnrollmentService } from '../enrollment.service';
var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(_enrollmentService) {
        this._enrollmentService = _enrollmentService;
        this.userModle = new User('keshav', '', 9638527410, 'keshav50m');
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent.prototype.onSubmit = function () {
        var _this = this;
        this._enrollmentService.enroll(this.userModle)
            .subscribe(
        // res => {
        //   console.log(res)
        //   localStorage.setItem('token', res.token)
        // },
        function (data) { return console.log(_this.userModle); });
    };
    RegistrationComponent = tslib_1.__decorate([
        Component({
            selector: 'app-registration',
            templateUrl: './registration.component.html',
            styleUrls: ['./registration.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [EnrollmentService])
    ], RegistrationComponent);
    return RegistrationComponent;
}());
export { RegistrationComponent };
//# sourceMappingURL=registration.component.js.map