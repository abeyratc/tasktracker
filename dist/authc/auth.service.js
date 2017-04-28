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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/observable/of');
require('rxjs/add/operator/do');
require('rxjs/add/operator/delay');
var credentials_1 = require('./credentials');
var global_constants_1 = require('../global.constants');
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.authcUrl = '/api/authc/login';
    }
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        var cred = new credentials_1.Credentials(username, password, '', this.uuid());
        var body = JSON.stringify(cred);
        var headers = new http_1.Headers(global_constants_1.httpHeaders);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.authcUrl, body, options)
            .map(function (res) {
            var data = res.json();
            if (data.apiKey) {
                //this.apitoken = data.apiKey;
                _this.isLoggedIn = true;
                _this.authCredentials = new credentials_1.Credentials(username, '', data.apiKey, '');
            }
            return Observable_1.Observable.of(_this.isLoggedIn);
        }).catch(this.handleError);
    };
    AuthService.prototype.logout = function () {
        this.isLoggedIn = false;
    };
    AuthService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    AuthService.prototype.getAuthenticatedCredentials = function () {
        return this.authCredentials;
    };
    AuthService.prototype.uuid = function () {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;

//# sourceMappingURL=auth.service.js.map
