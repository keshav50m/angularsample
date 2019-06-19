import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var EnrollmentService = /** @class */ (function () {
    function EnrollmentService(_http) {
        this._http = _http;
        this._url = 'http://localhost:3000/enroll';
        this.__url = 'http://localhost:3000/login';
    }
    EnrollmentService.prototype.enroll = function (user) {
        return this._http.post(this._url, user);
    };
    EnrollmentService.prototype.login = function (loginuserModle) {
        return this._http.post(this.__url, loginuserModle);
    };
    EnrollmentService.prototype.loggedIn = function () {
        return !!localStorage.getItem('token');
    };
    EnrollmentService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    EnrollmentService.prototype.deleteToken = function () {
        localStorage.removeItem('token');
    };
    EnrollmentService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], EnrollmentService);
    return EnrollmentService;
}());
export { EnrollmentService };
//# sourceMappingURL=enrollment.service.js.map