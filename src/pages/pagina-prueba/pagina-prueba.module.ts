import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaginaPruebaPage } from './pagina-prueba';

@NgModule({
  declarations: [
    PaginaPruebaPage,
  ],
  imports: [
    IonicPageModule.forChild(PaginaPruebaPage),
  ],
})
export class PaginaPruebaPageModule {}
