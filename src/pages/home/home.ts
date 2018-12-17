import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InicioPage } from '../inicio/inicio';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tab1Root: InicioPage;
  tab2Root: InicioPage;
  tab3Root: InicioPage;

  constructor(public navCtrl: NavController) {

  }

  entrar(){
    this.navCtrl.setRoot(InicioPage);
  }

}
