import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastroEstadiaPage } from '../cadastro-estadia/cadastro-estadia';
import { Estacionamento } from '../../models/estacionamento'
import { Storage } from '@ionic/storage';
/*

 * Generated class for the CadastroEstacionamentoPage page.
 *private storage: Storage
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 JSON.stringfy
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-estacionamento',
  templateUrl: 'cadastro-estacionamento.html',
})
export class CadastroEstacionamentoPage {
estacionamentos : Estacionamento[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
   this.estacionamentos = [];
    if(this.storage.get("estacionamentos") != null){
      let jsonObjectArray = JSON.parse(<any>this.storage.get("estacionamentos"));
      for (let jsonObject of jsonObjectArray){
        this.estacionamentos.push(new Estacionamento(jsonObject.email,jsonObject.usuario,jsonObject.password));
      }

    }
    this.estacionamentos.push(this.estacionamento);
    this.storage.set("estacionamentos", JSON.stringify(this.estacionamentos));



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroEstacionamentoPage');
  }
  loadPage(){
    this.navCtrl.push(CadastroEstadiaPage);

  }

}
