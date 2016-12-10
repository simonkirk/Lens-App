import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { LensProvider } from '../../providers/lens-provider';
import { Search } from '../../providers/search';
import { LensViewPage } from '../lens-view/lens-view';
export var SearchResultPage = (function () {
    function SearchResultPage(navCtrl, loadingCtrl, search, lens) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.search = search;
        this.lens = lens;
    }
    SearchResultPage.prototype.ionViewDidLoad = function () { };
    SearchResultPage.prototype.view = function (lens) {
        this.lens.lensChoosen = lens;
        this.navCtrl.push(LensViewPage);
    };
    SearchResultPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-search-result',
                    templateUrl: 'search-result.html'
                },] },
    ];
    /** @nocollapse */
    SearchResultPage.ctorParameters = [
        { type: NavController, },
        { type: LoadingController, },
        { type: Search, },
        { type: LensProvider, },
    ];
    return SearchResultPage;
}());
//# sourceMappingURL=search-result.js.map