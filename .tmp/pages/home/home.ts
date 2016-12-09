import { Component } from '@angular/core';
import { SpherePage } from '../sphere/sphere';
import { NavController } from 'ionic-angular';
import { LensProvider } from '../../providers/lens';
import { AuthProvider } from '../../providers/auth-provider';
import { AuthPage } from '../auth/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  sphere = SpherePage;
  constructor(public navCtrl: NavController, private pLens: LensProvider, private auth: AuthProvider) {
    
  }
  logout(){
    this.auth.logout();
    this.navCtrl.setRoot(AuthPage);
  }
  toSphere(){
    this.pLens.setType('sphere');
    this.navCtrl.push(SpherePage);
  }
}
