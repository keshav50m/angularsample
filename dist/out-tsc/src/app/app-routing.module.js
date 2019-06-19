import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
var routes = [
    { path: 'registration', component: RegistrationComponent },
    { path: 'login', component: LoginComponent },
    // { path: 'login', component: LoginComponent, canActivate: [enrollmentGuard] },
    { path: 'profile', component: ProfileComponent, }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
export var routingComponents = [RegistrationComponent, LoginComponent, ProfileComponent];
//# sourceMappingURL=app-routing.module.js.map