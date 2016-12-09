import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { AuthPage } from '../pages/auth/auth';
import { HomePage } from '../pages/home/home';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      this.checkPreviousAuthorization();
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }


  checkPreviousAuthorization(): void {
    if((window.localStorage.getItem('username') === "undefined" || window.localStorage.getItem('username') === null)) {
      this.rootPage = AuthPage;
    } else {
      this.rootPage = HomePage;
    }
  }
}
