import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { ReferalPage } from '../referal/referal';

/*
  Generated class for the Confirmation page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-confirmation',
  templateUrl: 'confirmation.html'
})
export class ConfirmationPage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {}

  ionViewDidLoad() {}


  next(){
    this.alertCtrl.create({
      title: 'Confirmation',
      subTitle: 'Would you like to place the following CL order?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Lol, he canceled!');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.navCtrl.push(ReferalPage);
          }
        }
      ]
    }).present();
  }

}
