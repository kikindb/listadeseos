import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Listas, ListaItem } from '../../app/classes/index';
import { ListaDeseosService } from '../../app/services/listadeseos.service';


@Component({
    selector: 'app-detalle',
    templateUrl: './detalle.component.html'
})
export class DetalleComponent implements OnInit {

    idx: number;
    lista: Listas;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public _listaDeseos: ListaDeseosService,
                public alertCtrl: AlertController
    ){
        this.idx = this.navParams.get('idx');
        this.lista = this.navParams.get('lista');
     }

    ngOnInit() { }

    actualizar(item: ListaItem){
        item.isComplete = !item.isComplete;
        this._listaDeseos.actualizarData();
    }

    borrarLista(){
        this.showConfirm();
    }
    showConfirm() {
        let confirm = this.alertCtrl.create({
          title: 'Desea eliminar la lista?',
          message: 'Esta seguro que desea eliminar esta lista?',
          buttons: [
            {
              text: 'Cancelar',
              handler: () => {
                console.log('Disagree clicked');
              }
            },
            {
              text: 'Aceptar',
              handler: () => {
                console.log('Agree clicked');
              }
            }
          ]
        });
        confirm.present();
    }
}