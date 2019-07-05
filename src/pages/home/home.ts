import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InicioPage } from '../inicio/inicio';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tab1: any;
  tab2: any;
  tab3: any;

  constructor(public navCtrl: NavController) {
  this.tab1= InicioPage;
  this.tab2= InicioPage;
  this.tab3= InicioPage;
  }

  entrar(){
    this.navCtrl.setRoot(TabsPage);
  }

}
