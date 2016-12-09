import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { ReferalPage } from '../referal/referal';
/*
  Generated class for the Confirmation page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var ConfirmationPage = (function () {
    function ConfirmationPage(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
    }
    ConfirmationPage.prototype.ionViewDidLoad = function () { };
    ConfirmationPage.prototype.next = function () {
        var _this = this;
        this.alertCtrl.create({
            title: 'Confirmation',
            subTitle: 'Would you like to place the following CL order?',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('Lol, he canceled!');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        _this.navCtrl.push(ReferalPage);
                    }
                }
            ]
        }).present();
    };
    ConfirmationPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-confirmation',
                    templateUrl: 'confirmation.html'
                },] },
    ];
    /** @nocollapse */
    ConfirmationPage.ctorParameters = [
        { type: NavController, },
        { type: AlertController, },
    ];
    return ConfirmationPage;
}());
//# sourceMappingURL=confirmation.js.map