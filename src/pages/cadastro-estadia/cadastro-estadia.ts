import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListaEstadiaPage } from '../lista-estadia/lista-estadia';
/**
 * Generated class for the CadastroEstadiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-estadia',
  templateUrl: 'cadastro-estadia.html',
})
export class CadastroEstadiaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroEstadiaPage');
  }
  loadPage2(){
    this.navCtrl.push(ListaEstadiaPage);
  }


}
