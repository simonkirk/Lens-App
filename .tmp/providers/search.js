import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
export var Search = (function () {
    function Search(http) {
        this.http = http;
    }
    Search.prototype.search = function () {
        //let headers = new Headers({ 'Content-Type': 'application/json' });
        //let options = new RequestOptions({ headers: headers });
        return this.http.get('http://zolotoypavlin.com:3000/api/search/daily').map(function (res) { return res.json(); });
    };
    Search.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    Search.ctorParameters = [
        { type: Http, },
    ];
    return Search;
}());
//# sourceMappingURL=search.js.map