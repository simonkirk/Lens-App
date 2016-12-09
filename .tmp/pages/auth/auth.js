import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AuthProvider } from '../../providers/auth-provider';
/*
  Generated class for the Auth page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var AuthPage = (function () {
    function AuthPage(navCtrl, alertCtrl, auth) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.auth = auth;
    }
    AuthPage.prototype.login = function () {
        var _this = this;
        this.auth.login(this.username, this.password).subscribe(function (res) {
            console.log('Authenticated: ' + res.user);
            window.localStorage.setItem('username', res.user);
            _this.navCtrl.setRoot(HomePage);
        }, function (error) {
            _this.username = '';
            _this.password = '';
            _this.alertCtrl.create({
                title: 'Authentication failure!',
                subTitle: 'Username or password is invalid.',
                buttons: ['OK']
            }).present();
        });
    };
    AuthPage.prototype.ionViewDidLoad = function () {
        console.log('Hello AuthPage Page');
    };
    AuthPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-auth',
                    templateUrl: 'auth.html'
                },] },
    ];
    /** @nocollapse */
    AuthPage.ctorParameters = [
        { type: NavController, },
        { type: AlertController, },
        { type: AuthProvider, },
    ];
    return AuthPage;
}());
//# sourceMappingURL=auth.js.map