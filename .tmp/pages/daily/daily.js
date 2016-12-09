import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LensProvider } from '../../providers/lens';
import { ConfirmationPage } from '../confirmation/confirmation';
/*
  Generated class for the Daily page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var DailyPage = (function () {
    function DailyPage(navCtrl, pLens) {
        this.navCtrl = navCtrl;
        this.pLens = pLens;
    }
    DailyPage.prototype.ionViewDidLoad = function () { };
    DailyPage.prototype.clarity1day = function () {
        this.pLens.setDailyDisponsableOptions('clarity1day');
        this.navCtrl.push(ConfirmationPage);
    };
    DailyPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-daily',
                    templateUrl: 'daily.html'
                },] },
    ];
    /** @nocollapse */
    DailyPage.ctorParameters = [
        { type: NavController, },
        { type: LensProvider, },
    ];
    return DailyPage;
}());
//# sourceMappingURL=daily.js.map