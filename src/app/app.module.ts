import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CadastroEstacionamentoPage } from '../pages/cadastro-estacionamento/cadastro-estacionamento';
import { CadastroEstadiaPage } from '../pages/cadastro-estadia/cadastro-estadia';
import { ListaEstadiaPage } from '../pages/lista-estadia/lista-estadia';
import { IonicStorageModule } from '@ionic/storage';
//import { InfoEstadiaPage } from '../pages/info-estadia/info-estadia';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CadastroEstacionamentoPage,
    CadastroEstadiaPage,
    ListaEstadiaPage
    //InfoEstadiaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CadastroEstacionamentoPage,
    CadastroEstadiaPage,
    ListaEstadiaPage
    //InfoEstadiaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
