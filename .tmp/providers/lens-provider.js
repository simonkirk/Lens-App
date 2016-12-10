import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
export var LensProvider = (function () {
    function LensProvider(http) {
        this.http = http;
        this.prescription = {
            hasToric: true,
            sphere: { l: 0, r: 0 },
            cylinder: { l: 0, r: 0 },
            axis: { l: 0, r: 0 },
            bvd: { l: 0.011, r: 0.011 }
        };
        this.RX = { l: 0, r: 0, wasAdjusted: false };
    }
    LensProvider.prototype.calculate = function () {
        if (this.prescription.hasToric) {
            this.RX.l = this.prescription.sphere.l + (this.prescription.cylinder.l / 2);
            this.RX.r = this.prescription.sphere.r + (this.prescription.cylinder.r / 2);
        }
        else {
            this.RX.l = this.prescription.sphere.l / (1 - (this.prescription.bvd.l * this.prescription.sphere.l));
            this.RX.r = this.prescription.sphere.r / (1 - (this.prescription.bvd.r * this.prescription.sphere.r));
            this.RX.l = this.round25(this.RX.l);
            this.RX.r = this.round25(this.RX.r);
        }
        console.log(this.RX.l);
        console.log(this.RX.r);
    };
    LensProvider.prototype.incLRx = function () { this.RX.l = this.round(this.RX.l + 0.25, 2); this.RX.wasAdjusted = true; };
    LensProvider.prototype.incRRx = function () { this.RX.r = this.round(this.RX.r + 0.25, 2); this.RX.wasAdjusted = true; };
    LensProvider.prototype.decLRx = function () { this.RX.l = this.round(this.RX.l - 0.25, 2); this.RX.wasAdjusted = true; };
    LensProvider.prototype.decRRx = function () { this.RX.r = this.round(this.RX.r - 0.25, 2); this.RX.wasAdjusted = true; };
    LensProvider.prototype.incSL = function () {
        this.prescription.sphere.l = this.round(this.prescription.sphere.l + 0.25, 2);
        if (this.prescription.sphere.l > 20) {
            this.prescription.sphere.l = 20;
        }
    };
    LensProvider.prototype.decSL = function () {
        this.prescription.sphere.l = this.round(this.prescription.sphere.l - 0.25, 2);
        if (this.prescription.sphere.l < -20) {
            this.prescription.sphere.l = -20;
        }
    };
    LensProvider.prototype.incSR = function () {
        this.prescription.sphere.r = this.round(this.prescription.sphere.r + 0.25, 2);
        if (this.prescription.sphere.r > 20) {
            this.prescription.sphere.r = 20;
        }
    };
    LensProvider.prototype.decSR = function () {
        this.prescription.sphere.r = this.round(this.prescription.sphere.r - 0.25, 2);
        if (this.prescription.sphere.r < -20) {
            this.prescription.sphere.r = -20;
        }
    };
    LensProvider.prototype.incCL = function () {
        this.prescription.cylinder.l = this.round(this.prescription.cylinder.l + 0.25, 2);
        if (this.prescription.cylinder.l > 0) {
            this.prescription.cylinder.l = 0;
        }
    };
    LensProvider.prototype.decCL = function () {
        this.prescription.cylinder.l = this.round(this.prescription.cylinder.l - 0.25, 2);
        if (this.prescription.cylinder.l < -8) {
            this.prescription.cylinder.l = -8;
        }
        ;
    };
    LensProvider.prototype.incCR = function () {
        this.prescription.cylinder.r = this.round(this.prescription.cylinder.r + 0.25, 2);
        if (this.prescription.cylinder.r > 0) {
            this.prescription.cylinder.r = 0;
        }
        ;
    };
    LensProvider.prototype.decCR = function () {
        this.prescription.cylinder.r = this.round(this.prescription.cylinder.r - 0.25, 2);
        if (this.prescription.cylinder.r < -8) {
            this.prescription.cylinder.r = -8;
        }
        ;
    };
    LensProvider.prototype.incAL = function () { this.prescription.axis.l += 1; if (this.prescription.axis.l > 180) {
        this.prescription.axis.l = 180;
    } };
    LensProvider.prototype.decAL = function () { this.prescription.axis.l -= 1; if (this.prescription.axis.l < 0) {
        this.prescription.axis.l = 0;
    } };
    LensProvider.prototype.incAR = function () { this.prescription.axis.r += 1; if (this.prescription.axis.r > 180) {
        this.prescription.axis.r = 180;
    } };
    LensProvider.prototype.decAR = function () { this.prescription.axis.r -= 1; if (this.prescription.axis.r < 0) {
        this.prescription.axis.r = 0;
    } };
    LensProvider.prototype.incRBVD = function () {
        this.prescription.bvd.r = this.round(this.prescription.bvd.r + 0.001, 3);
        if (this.prescription.bvd.r > 0.015) {
            this.prescription.bvd.r = 0.015;
        }
    };
    LensProvider.prototype.decRBVD = function () {
        this.prescription.bvd.r = this.round(this.prescription.bvd.r - 0.001, 3);
        if (this.prescription.bvd.r < 0.008) {
            this.prescription.bvd.r = 0.008;
        }
    };
    LensProvider.prototype.incLBVD = function () {
        this.prescription.bvd.l = this.round(this.prescription.bvd.l + 0.001, 3);
        if (this.prescription.bvd.l > 0.015) {
            this.prescription.bvd.l = 0.015;
        }
    };
    LensProvider.prototype.decLBVD = function () {
        this.prescription.bvd.l = this.round(this.prescription.bvd.l - 0.001, 3);
        if (this.prescription.bvd.l < 0.008) {
            this.prescription.bvd.l = 0.008;
        }
    };
    LensProvider.prototype.round = function (x, digits) {
        return parseFloat(x.toFixed(digits));
    };
    LensProvider.prototype.round25 = function (x) {
        return Math.ceil(x / 0.25) * 0.25;
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
//# sourceMappingURL=lens-provider.js.map