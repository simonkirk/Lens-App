import { Component } from '@angular/core';
import { SpherePage } from '../sphere/sphere';
import { NavController } from 'ionic-angular';
import { LensProvider } from '../../providers/lens-provider';
import { AuthProvider } from '../../providers/auth-provider';
import { AuthPage } from '../auth/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, private lens: LensProvider, private auth: AuthProvider) {
    
  }
  logout(){
    this.auth.logout();
    this.navCtrl.setRoot(AuthPage);
  }
  toSphere(){
    this.lens.lensType = 'Sphere';
    this.navCtrl.push(SpherePage);
  }
}
