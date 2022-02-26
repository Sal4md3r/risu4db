import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
<<<<<<< HEAD
=======
import { PaginaPruebaPage } from '../pages/pagina-prueba/pagina-prueba';
>>>>>>> 8362fefdeedaf2c896657fb1399ff6afe221a89c

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
<<<<<<< HEAD
  rootPage:any = HomePage;
=======
  rootPage:any = PaginaPruebaPage;
>>>>>>> 8362fefdeedaf2c896657fb1399ff6afe221a89c

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

