import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IConexionPage } from './i-conexion';

@NgModule({
  declarations: [
    IConexionPage,
  ],
  imports: [
    IonicPageModule.forChild(IConexionPage),
  ],
})
export class IConexionPageModule {}
