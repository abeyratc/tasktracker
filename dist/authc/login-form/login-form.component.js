"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var auth_service_1 = require('../auth.service');
var LoginFormComponent = (function () {
    function LoginFormComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.clearMessages();
    }
    LoginFormComponent.prototype.login = function () {
        var _this = this;
        if (this.username && this.password) {
            this.authService.login(this.username, this.password).subscribe(function () {
                if (_this.authService.isLoggedIn) {
                    console.log("redirectUrl=" + _this.authService.redirectUrl);
                    var redirect = _this.redirectTo(_this.authService.redirectUrl);
                    _this.router.navigate([redirect]);
                }
                else {
                    console.log("not logged in");
                }
            });
        }
        else {
            if (!this.username) {
                this.errorun = '* Username required';
            }
            if (!this.password) {
                this.errorpw = '* Password required';
            }
        }
    };
    LoginFormComponent.prototype.logout = function () {
        this.authService.logout();
    };
    LoginFormComponent.prototype.redirectTo = function (redirectUrl) {
        if (!redirectUrl || redirectUrl === 'login') {
            return '/taskboard';
        }
        else {
            return redirectUrl;
        }
    };
    LoginFormComponent.prototype.clearMessages = function () {
        this.errorun = '';
        this.errorpw = '';
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], LoginFormComponent.prototype, "username", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], LoginFormComponent.prototype, "password", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], LoginFormComponent.prototype, "name", void 0);
    LoginFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'login-form',
            templateUrl: 'login-form.component.html',
            styleUrls: ['login-form.component.css']
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, router_1.Router])
    ], LoginFormComponent);
    return LoginFormComponent;
}());
exports.LoginFormComponent = LoginFormComponent;

//# sourceMappingURL=login-form.component.js.map
