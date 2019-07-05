import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
<<<<<<< HEAD

import {InicioPage} from '../inicio/inicio';
=======
import { InicioPage } from '../inicio/inicio';
>>>>>>> 1ed8bcd5d3d342384837163ff8cc7549ecbba480

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1: any;
  tab2: any;
  tab3: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tab1 = InicioPage;
    this.tab2 = InicioPage;
    this.tab3 = InicioPage;

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
