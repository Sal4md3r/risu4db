import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PaginaPruebaPage } from '../pages/pagina-prueba/pagina-prueba';
<<<<<<< HEAD
import {MConexionesPage} from '../pages/m-conexiones/m-conexiones';
import {MprincipalPage} from '../pages/mprincipal/mprincipal';
import {IConexionPage} from '../pages/i-conexion/i-conexion';
import {MTablasPage} from '../pages/m-tablas/m-tablas';
=======
>>>>>>> 8362fefdeedaf2c896657fb1399ff6afe221a89c

@NgModule({
  declarations: [
    MyApp,
    HomePage,
<<<<<<< HEAD
    PaginaPruebaPage,
    MConexionesPage,
    MprincipalPage,
    IConexionPage,
    MTablasPage
=======
    PaginaPruebaPage
>>>>>>> 8362fefdeedaf2c896657fb1399ff6afe221a89c
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
<<<<<<< HEAD
    PaginaPruebaPage,
    MConexionesPage,
    MprincipalPage,
    IConexionPage,
    MTablasPage
=======
    PaginaPruebaPage
>>>>>>> 8362fefdeedaf2c896657fb1399ff6afe221a89c
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
