import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Search {

  constructor(public http: Http) {}

  search(){
    //let headers = new Headers({ 'Content-Type': 'application/json' });
    //let options = new RequestOptions({ headers: headers });
    return this.http.get('http://zolotoypavlin.com:3000/api/search/daily').map((res) => res.json());
  }

}
