import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LensProvider } from '../../providers/lens';
import { ModalityPage } from '../modality/modality';
/*
  Generated class for the Sphere page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var SpherePage = (function () {
    function SpherePage(navCtrl, pLens) {
        this.navCtrl = navCtrl;
        this.pLens = pLens;
    }
    SpherePage.prototype.ionViewDidLoad = function () {
    };
    SpherePage.prototype.calculate = function () {
        this.navCtrl.push(ModalityPage);
    };
    SpherePage.prototype.dec = function () { this.pLens.dec(); };
    SpherePage.prototype.inc = function () { this.pLens.inc(); };
    SpherePage.prototype.decA = function () { this.pLens.decA(); };
    SpherePage.prototype.incA = function () { this.pLens.incA(); };
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