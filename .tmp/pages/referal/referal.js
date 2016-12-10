import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LensProvider } from '../../providers/lens-provider';
import { OrderDetailsPage } from '../order-details/order-details';
/*
  Generated class for the Referal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var ReferalPage = (function () {
    function ReferalPage(navCtrl, lens) {
        this.navCtrl = navCtrl;
        this.lens = lens;
    }
    ReferalPage.prototype.ionViewDidLoad = function () { };
    ReferalPage.prototype.finish = function () {
        //this.pLens.calculate(this.pLens.hasAstigmatism);
        this.navCtrl.push(OrderDetailsPage);
    };
    ReferalPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-referal',
                    templateUrl: 'referal.html'
                },] },
    ];
    /** @nocollapse */
    ReferalPage.ctorParameters = [
        { type: NavController, },
        { type: LensProvider, },
    ];
    return ReferalPage;
}());
//# sourceMappingURL=referal.js.map