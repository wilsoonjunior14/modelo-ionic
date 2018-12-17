import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import { LoadingController } from 'ionic-angular';

/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HTTP, public loading: LoadingController) {

    /*const load = this.loading.create({content:'Aguarde...'});
    load.present();

    this.http.get("https://viacep.com.br/ws/01001000/json/",{},{})
    .then((data) => {
      load.dismiss();
      console.log(data);
    });*/

  }


}
