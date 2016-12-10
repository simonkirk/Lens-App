import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LensProvider } from '../../providers/lens-provider';
/*
  Generated class for the OrderDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var OrderDetailsPage = (function () {
    function OrderDetailsPage(navCtrl, lens) {
        this.navCtrl = navCtrl;
        this.lens = lens;
    }
    OrderDetailsPage.prototype.ionViewDidLoad = function () { };
    OrderDetailsPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-order-details',
                    templateUrl: 'order-details.html'
                },] },
    ];
    /** @nocollapse */
    OrderDetailsPage.ctorParameters = [
        { type: NavController, },
        { type: LensProvider, },
    ];
    return OrderDetailsPage;
}());
//# sourceMappingURL=order-details.js.map