import { Component } from '@angular/core';
import { SpherePage } from '../sphere/sphere';
import { NavController } from 'ionic-angular';
import { LensProvider } from '../../providers/lens-provider';
import { AuthProvider } from '../../providers/auth-provider';
import { AuthPage } from '../auth/auth';
export var HomePage = (function () {
    function HomePage(navCtrl, lens, auth) {
        this.navCtrl = navCtrl;
        this.lens = lens;
        this.auth = auth;
    }
    HomePage.prototype.logout = function () {
        this.auth.logout();
        this.navCtrl.setRoot(AuthPage);
    };
    HomePage.prototype.toSphere = function () {
        this.lens.lensType = 'Sphere';
        this.navCtrl.push(SpherePage);
    };
    HomePage.decorators = [
        { type: Component, args: [{
                    selector: 'page-home',
                    templateUrl: 'home.html'
                },] },
    ];
    /** @nocollapse */
    HomePage.ctorParameters = [
        { type: NavController, },
        { type: LensProvider, },
        { type: AuthProvider, },
    ];
    return HomePage;
}());
//# sourceMappingURL=home.js.map