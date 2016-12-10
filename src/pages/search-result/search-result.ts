import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { LensProvider } from '../../providers/lens-provider';
import { Search } from '../../providers/search';
import { LensViewPage } from '../lens-view/lens-view';

@Component({
  selector: 'page-search-result',
  templateUrl: 'search-result.html'
})
export class SearchResultPage {
  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public search: Search, public lens: LensProvider) {
    
  }

  ionViewDidLoad() {}
  
  view(lens){
    this.lens.lensChoosen = lens;
    this.navCtrl.push(LensViewPage);
  }
}
