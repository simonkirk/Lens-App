import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the Lens provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
export var AuthProvider = (function () {
    function AuthProvider(http) {
        this.http = http;
    }
    AuthProvider.prototype.login = function (username, password) {
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var options = new RequestOptions({ headers: headers });
        return this.http.post('http://5.56.125.168/login', { username: username }, options).map(function (res) { return res.json(); });
    };
    AuthProvider.prototype.logout = function () {
        window.localStorage.removeItem('username');
    };
    AuthProvider.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    AuthProvider.ctorParameters = [
        { type: Http, },
    ];
    return AuthProvider;
}());
//# sourceMappingURL=auth-provider.js.map