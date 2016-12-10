import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { LensProvider } from '../../providers/lens-provider';
import { Search } from '../../providers/search';
import { SearchResultPage } from '../search-result/search-result';
export var ModalityPage = (function () {
    function ModalityPage(navCtrl, loadingCtrl, search, lens) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.search = search;
        this.lens = lens;
        this.loader = this.loadingCtrl.create({
            content: 'Searching...'
        });
    }
    ModalityPage.prototype.ionViewDidLoad = function () {
    };
    ModalityPage.prototype.daily = function () {
        var _this = this;
        this.lens.lensModality = 'Daily';
        this.loader.present();
        this.search.search().subscribe(function (res) {
            _this.lens.tmp = res.results;
            _this.loader.dismiss();
            _this.navCtrl.push(SearchResultPage);
        }, function (err) {
            _this.loader.dismiss();
        });
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
        { type: LoadingController, },
        { type: Search, },
        { type: LensProvider, },
    ];
    return ModalityPage;
}());
//# sourceMappingURL=modality.js.map