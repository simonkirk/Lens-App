import { Component } from '@angular/core';
import { SpherePage } from '../sphere/sphere';
import { NavController } from 'ionic-angular';
import { LensProvider } from '../../providers/lens';
import { AuthProvider } from '../../providers/auth-provider';
import { AuthPage } from '../auth/auth';
export var HomePage = (function () {
    function HomePage(navCtrl, pLens, auth) {
        this.navCtrl = navCtrl;
        this.pLens = pLens;
        this.auth = auth;
        this.sphere = SpherePage;
    }
    HomePage.prototype.logout = function () {
        this.auth.logout();
        this.navCtrl.setRoot(AuthPage);
    };
    HomePage.prototype.toSphere = function () {
        this.pLens.setType('sphere');
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