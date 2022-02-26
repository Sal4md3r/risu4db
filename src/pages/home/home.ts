import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
<<<<<<< HEAD
import {MConexionesPage} from '../../pages/m-conexiones/m-conexiones';
import {IConexionPage} from '../../pages/i-conexion/i-conexion';
import {MTablasPage} from '../../pages/m-tablas/m-tablas';
import {MprincipalPage} from '../../pages/mprincipal/mprincipal';
=======
>>>>>>> 8362fefdeedaf2c896657fb1399ff6afe221a89c

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
<<<<<<< HEAD
  iConexion:any;
  mConexiones:any;
  mTablas:any;
  mPrincipal:any;

  constructor(public navCtrl: NavController) {
    this.iConexion = IConexionPage;
    this.mConexiones=MConexionesPage;
    this.mTablas=MTablasPage;
    this.mPrincipal=MprincipalPage;
=======

  constructor(public navCtrl: NavController) {
>>>>>>> 8362fefdeedaf2c896657fb1399ff6afe221a89c

  }

}
