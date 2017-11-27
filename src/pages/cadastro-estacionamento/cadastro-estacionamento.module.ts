import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroEstacionamentoPage } from './cadastro-estacionamento';

@NgModule({
  declarations: [
    CadastroEstacionamentoPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroEstacionamentoPage),
  ],
})
export class CadastroEstacionamentoPageModule {}
