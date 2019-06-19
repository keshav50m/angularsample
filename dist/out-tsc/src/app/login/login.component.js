import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { EnrollmentService } from '../enrollment.service';
import { Loginusers } from '../loginusers';
import { Router } from '@angular/router';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(_enrollmentService, router) {
        this._enrollmentService = _enrollmentService;
        this.router = router;
        this.loginuserModle = new Loginusers('', '', 9636336999);
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this._enrollmentService.login(this.loginuserModle)
            .subscribe(function (res) {
            console.log(res);
            localStorage.setItem('token', res.token);
            _this.router.navigateByUrl('/profile');
        }, function (data) { return console.log(_this.loginuserModle); });
    };
    LoginComponent = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [EnrollmentService, Router])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map