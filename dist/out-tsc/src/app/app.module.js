import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { enrollmentGuard } from './enrollment.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { ProfileComponent } from './profile/profile.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                routingComponents,
                ProfileComponent
            ],
            imports: [
                BrowserModule,
                AppRoutingModule,
                FormsModule,
                HttpClientModule
            ],
            providers: [enrollmentGuard, {
                    provide: HTTP_INTERCEPTORS,
                    useClass: TokenInterceptorService,
                    multi: true
                }],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map