import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DailyPage } from '../daily/daily';
import { LensProvider } from '../../providers/lens-provider';

/*
  Generated class for the Modality page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-modality',
  templateUrl: 'modality.html'
})
export class ModalityPage {

  constructor(public navCtrl: NavController, private lens: LensProvider) {}

  ionViewDidLoad() {}
  daily(){
    this.lens.lensModality = 'Daily';
    this.navCtrl.push(DailyPage);
  }
}
