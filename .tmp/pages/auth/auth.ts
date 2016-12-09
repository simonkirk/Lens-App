import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AuthProvider } from '../../providers/auth-provider';

/*
  Generated class for the Auth page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html'
})
export class AuthPage {
  username: string;
  password: string;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private auth: AuthProvider) {}

  login(){
    this.auth.login(this.username, this.password).subscribe((res)=>{
      console.log('Authenticated: ' + res.user);
      window.localStorage.setItem('username', res.user);
      this.navCtrl.setRoot(HomePage)

    }, error => {
      this.username = '';
      this.password = '';
      this.alertCtrl.create({
        title: 'Authentication failure!',
        subTitle: 'Username or password is invalid.',
        buttons: ['OK']
      }).present();
    })
  }

  ionViewDidLoad() {
    console.log('Hello AuthPage Page');
  }

}
