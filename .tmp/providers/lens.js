import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the Lens provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
export var LensProvider = (function () {
    function LensProvider(http) {
        this.http = http;
        this.prescription = 0;
        this.astigmatismValue = 0;
        this.hasAstigmatism = false;
        this.vertexAdjustedRx = 0;
    }
    LensProvider.prototype.calculate = function (hasToric) {
        if (hasToric) {
            this.vertexAdjustedRx = this.prescription + (this.astigmatismValue / 2);
        }
        else {
            this.vertexAdjustedRx = this.prescription / (1 - (0.012 * this.prescription));
        }
    };
    LensProvider.prototype.setDailyDisponsableOptions = function (options) { this.dailyDisponsableOptions = options; };
    LensProvider.prototype.setModality = function (modality) { this.modality = modality; };
    LensProvider.prototype.setType = function (type) { this.type = type; };
    LensProvider.prototype.inc = function () { this.prescription = this.round(this.prescription + 0.1, 2); };
    LensProvider.prototype.dec = function () { this.prescription = this.round(this.prescription - 0.1, 2); };
    LensProvider.prototype.incA = function () { this.astigmatismValue = this.round(this.astigmatismValue + 0.1, 2); };
    LensProvider.prototype.decA = function () { this.astigmatismValue = this.round(this.astigmatismValue - 0.1, 2); };
    LensProvider.prototype.round = function (x, digits) {
        return parseFloat(x.toFixed(digits));
    };
    LensProvider.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    LensProvider.ctorParameters = [
        { type: Http, },
    ];
    return LensProvider;
}());
//# sourceMappingURL=lens.js.map