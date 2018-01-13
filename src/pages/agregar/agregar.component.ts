import { Component, OnInit } from '@angular/core';
import { ListaItem, Listas } from '../../app/classes/index';
import { AlertController, NavController } from 'ionic-angular';
import { ListaDeseosService } from '../../app/services/listadeseos.service';


@Component({
    selector: 'app-agregar',
    templateUrl: './agregar.component.html'
})
export class AgregarComponent implements OnInit {

    nombreLista: string = '';
    nombreItem: string = '';
    items:ListaItem[] = [];

    constructor(public alertCtrl: AlertController, public navCtrl: NavController, public _listaDeseos: ListaDeseosService) { 

    }

    agregar(){
        if(this.nombreItem.length == 0){
            return;
        }

        let item = new ListaItem();
        item.name = this.nombreItem;

        this.items.push(item);
        this.nombreItem = '';
    }moduleOrComponent
    borrar(index: number){
        if(index > -1){
            this.items.splice(index,1)
        }
    }

    guardarLista(){
        if(this.nombreLista.length == 0){
            let alert = this.alertCtrl.create({
                title: 'Nombre de la lista',
                subTitle: 'El nombre de la lista es requerido',
                buttons: ['OK']
            });
            alert.present();
            return;
        }

        let lista = new Listas (this.nombreLista);
        lista.items = this.items;

        this._listaDeseos.listas.push(lista);
        this.navCtrl.pop();
    }

    ngOnInit() { }
}