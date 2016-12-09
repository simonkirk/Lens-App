import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DailyPage } from '../daily/daily';
import { LensProvider } from '../../providers/lens';
/*
  Generated class for the Modality page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var ModalityPage = (function () {
    function ModalityPage(navCtrl, pLens) {
        this.navCtrl = navCtrl;
        this.pLens = pLens;
    }
    ModalityPage.prototype.ionViewDidLoad = function () { };
    ModalityPage.prototype.daily = function () {
        this.pLens.setModality('daily');
        this.navCtrl.push(DailyPage);
    };
    ModalityPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-modality',
                    templateUrl: 'modality.html'
                },] },
    ];
    /** @nocollapse */
    ModalityPage.ctorParameters = [
        { type: NavController, },
        { type: LensProvider, },
    ];
    return ModalityPage;
}());
//# sourceMappingURL=modality.js.map