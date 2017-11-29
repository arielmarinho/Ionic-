import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaEstadiaPage } from './lista-estadia';

@NgModule({
  declarations: [
    ListaEstadiaPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaEstadiaPage),
  ],
})
export class ListaEstadiaPageModule {}
