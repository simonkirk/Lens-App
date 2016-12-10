import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LensProvider } from '../../providers/lens-provider';
import { ModalityPage } from '../modality/modality';
/*
  Generated class for the Sphere page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var SpherePage = (function () {
    function SpherePage(navCtrl, lens) {
        this.navCtrl = navCtrl;
        this.lens = lens;
    }
    SpherePage.prototype.ionViewDidLoad = function () {
    };
    SpherePage.prototype.calculateBtn = function () {
        this.lens.calculate();
        this.navCtrl.push(ModalityPage);
    };
    SpherePage.decorators = [
        { type: Component, args: [{
                    selector: 'page-sphere',
                    templateUrl: 'sphere.html'
                },] },
    ];
    /** @nocollapse */
    SpherePage.ctorParameters = [
        { type: NavController, },
        { type: LensProvider, },
    ];
    return SpherePage;
}());
//# sourceMappingURL=sphere.js.map