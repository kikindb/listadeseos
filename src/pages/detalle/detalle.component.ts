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
        let todosCompletos: boolean = true;

        for(let item of this.lista.items){
          if(!item.isComplete){
            todosCompletos = false;
            break;
          }
        }

        this.lista.isComplete = todosCompletos;

        this._listaDeseos.actualizarData();
    }

    borrarLista(){
      let confirm = this.alertCtrl.create({
        title: 'Eliminar la lista '+this.lista.name,
        message: '¿Esta seguro que desea eliminar esta lista?',
        buttons: [
          {
            text: 'Cancelar'
          },
          {
            text: 'Aceptar',
            handler: () => {
              this._listaDeseos.eliminarLista(this.idx);
              this.navCtrl.pop();
            }
          }
        ]
      });
      confirm.present();
    }

}