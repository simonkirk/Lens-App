import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LensProvider } from '../../providers/lens';
import { ConfirmationPage } from '../confirmation/confirmation';
/*
  Generated class for the Daily page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-daily',
  templateUrl: 'daily.html'
})
export class DailyPage {

  constructor(public navCtrl: NavController, private pLens: LensProvider) {}

  ionViewDidLoad() {}
  clarity1day(){
    this.pLens.setDailyDisponsableOptions('clarity1day');
    this.navCtrl.push(ConfirmationPage);
  }

}
