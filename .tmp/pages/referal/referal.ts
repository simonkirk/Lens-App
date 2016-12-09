import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LensProvider } from '../../providers/lens';
import { OrderDetailsPage } from '../order-details/order-details';

/*
  Generated class for the Referal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-referal',
  templateUrl: 'referal.html'
})
export class ReferalPage {
  constructor(public navCtrl: NavController, public pLens: LensProvider) {}

  ionViewDidLoad() {}

  finish(){
    this.pLens.calculate(this.pLens.hasAstigmatism);
    this.navCtrl.push(OrderDetailsPage);
  }
}
