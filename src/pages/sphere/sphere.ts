import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LensProvider } from '../../providers/lens-provider';
import { ModalityPage } from '../modality/modality';

/*
  Generated class for the Sphere page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-sphere',
  templateUrl: 'sphere.html'
})
export class SpherePage {
  constructor(public navCtrl: NavController, public lens: LensProvider) {}
  ionViewDidLoad() {
  }
  calculateBtn(){
    this.lens.calculate();
    this.navCtrl.push(ModalityPage);
  }
}
