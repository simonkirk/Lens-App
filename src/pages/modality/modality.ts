import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { LensProvider } from '../../providers/lens-provider';
import { Search } from '../../providers/search';
import { SearchResultPage } from '../search-result/search-result';

@Component({
  selector: 'page-modality',
  templateUrl: 'modality.html'
})
export class ModalityPage {
  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public search: Search, public lens: LensProvider) {}

  ionViewDidLoad() {
  }
  daily(){
    this.lens.lensModality = 'Daily';
    this.loader.present();
    this.search.search().subscribe((res)=>{
      this.lens.tmp = res.results;
      this.loader.dismiss();
      this.navCtrl.push(SearchResultPage);
    }, err => {
      this.loader.dismiss();
    });
  }


  loader = this.loadingCtrl.create({
    content: 'Searching...'
  });
}
