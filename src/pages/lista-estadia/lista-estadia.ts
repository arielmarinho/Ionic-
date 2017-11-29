import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Estadia } from '../../models/estadia';
//import { InfoEstadiaPage } from '../info-estadia/info-estadia';
/**
 * Generated class for the ListaEstadiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-estadia',
  templateUrl: 'lista-estadia.html',
})
export class ListaEstadiaPage {
  estadias : Estadia[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.estadias = [new Estadia ("teste","teste"), new Estadia ("horario 1","horario 2")]; 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaEstadiaPage');
  }
/*loadPage3(){
  this.navCtrl = navigation.push(InfoEstadiaPage);
}
*/
}
