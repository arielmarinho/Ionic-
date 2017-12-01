import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastroEstacionamentoPage } from  '../cadastro-estacionamento/cadastro-estacionamento';
//import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',

})
export class HomePage {

  constructor(public navCtrl: NavController) {


  }
  proxPagina(){
    this.navCtrl.push(CadastroEstacionamentoPage);
  }

}
