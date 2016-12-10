import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LensProvider } from '../../providers/lens-provider';
import { ReferalPage } from '../referal/referal';

@Component({
  selector: 'page-lens-view',
  templateUrl: 'lens-view.html'
})
export class LensViewPage {

  constructor(public navCtrl: NavController, public lens: LensProvider) {}

  ionViewDidLoad() {}
  
  placeOrder(){
    this.navCtrl.push(ReferalPage);
  }
  

}
