import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroEstadiaPage } from './cadastro-estadia';

@NgModule({
  declarations: [
    CadastroEstadiaPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroEstadiaPage),
  ],
})
export class CadastroEstadiaPageModule {}
