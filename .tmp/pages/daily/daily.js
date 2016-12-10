import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LensProvider } from '../../providers/lens-provider';
import { SearchResultPage } from '../search-result/search-result';
/*
  Generated class for the Daily page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var DailyPage = (function () {
    function DailyPage(navCtrl, lens) {
        this.navCtrl = navCtrl;
        this.lens = lens;
    }
    DailyPage.prototype.ionViewDidLoad = function () { };
    DailyPage.prototype.clarity1day = function () {
        this.lens.dailyDisponsableOptions = 'Clarity 1 day';
        this.navCtrl.push(SearchResultPage);
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