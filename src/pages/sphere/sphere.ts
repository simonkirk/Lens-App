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
  calculateBtn(){this.navCtrl.push(ModalityPage)}
  decL(){this.lens.decL()}
  incL(){this.lens.incL()}
  decR(){this.lens.decR()}
  incR(){this.lens.incR()}

}
