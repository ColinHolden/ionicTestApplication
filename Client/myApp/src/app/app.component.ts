import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {Router,RouterModule} from '@angular/router';

import {  } from '@angular/core';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  router:Router;

  goToNav1($event){
    this.router.navigate(['/route-1']);
    
  }

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,router:Router) {
    platform.ready().then(() => {
      this.router = router;
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //statusBar.styleBlackOpaque();
      splashScreen.hide();
    });
  }
}
