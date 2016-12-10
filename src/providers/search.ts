import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Search {

  constructor(public http: Http) {}

  search(){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get('http://5.56.125.168/api/search/daily').map((res) => res.json());
  }

}
