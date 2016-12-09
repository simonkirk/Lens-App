import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { AuthPage } from '../pages/auth/auth';
import { HomePage } from '../pages/home/home';
export var MyApp = (function () {
    function MyApp(platform) {
        var _this = this;
        platform.ready().then(function () {
            _this.checkPreviousAuthorization();
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
            Splashscreen.hide();
        });
    }
    MyApp.prototype.checkPreviousAuthorization = function () {
        if ((window.localStorage.getItem('username') === "undefined" || window.localStorage.getItem('username') === null)) {
            this.rootPage = AuthPage;
        }
        else {
            this.rootPage = HomePage;
        }
    };
    MyApp.decorators = [
        { type: Component, args: [{
                    templateUrl: 'app.html'
                },] },
    ];
    /** @nocollapse */
    MyApp.ctorParameters = [
        { type: Platform, },
    ];
    return MyApp;
}());
//# sourceMappingURL=app.component.js.map