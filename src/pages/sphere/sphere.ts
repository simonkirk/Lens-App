import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LensProvider } from '../../providers/lens';
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
  prescription: Number;
  constructor(public navCtrl: NavController, public pLens: LensProvider) {}

  ionViewDidLoad() {
  }
  calculate(){
    this.navCtrl.push(ModalityPage);
  }
  dec(){this.pLens.dec()}
  inc(){this.pLens.inc()}
  decA(){this.pLens.decA()}
  incA(){this.pLens.incA()}

}
