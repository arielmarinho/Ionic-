import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastroEstadiaPage } from '../cadastro-estadia/cadastro-estadia';
import { Estacionamento } from '../../models/estacionamento';
/**
 * Generated class for the CadastroEstacionamentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-estacionamento',
  templateUrl: 'cadastro-estacionamento.html',
})
export class CadastroEstacionamentoPage {
estacionamentos : Estacionamento;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroEstacionamentoPage');
  }
  loadPage(){
    this.navCtrl.push(CadastroEstadiaPage);

  }

}
