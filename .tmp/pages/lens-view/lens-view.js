import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LensProvider } from '../../providers/lens-provider';
import { ReferalPage } from '../referal/referal';
export var LensViewPage = (function () {
    function LensViewPage(navCtrl, lens) {
        this.navCtrl = navCtrl;
        this.lens = lens;
    }
    LensViewPage.prototype.ionViewDidLoad = function () { };
    LensViewPage.prototype.placeOrder = function () {
        this.navCtrl.push(ReferalPage);
    };
    LensViewPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-lens-view',
                    templateUrl: 'lens-view.html'
                },] },
    ];
    /** @nocollapse */
    LensViewPage.ctorParameters = [
        { type: NavController, },
        { type: LensProvider, },
    ];
    return LensViewPage;
}());
//# sourceMappingURL=lens-view.js.map