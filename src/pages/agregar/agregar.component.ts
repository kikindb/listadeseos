import { Component, OnInit } from '@angular/core';
import { ListaItem, Listas } from '../../app/classes/index';

@Component({
    selector: 'app-agregar',
    templateUrl: './agregar.component.html'
})
export class AgregarComponent implements OnInit {

    nombreLista: string;
    nombreItem: string = '';
    items:ListaItem[] = [];

    constructor() { 

    }

    agregar(){
        if(this.nombreItem.length == 0){
            return;
        }

        let item = new ListaItem();
        item.name = this.nombreItem;

        this.items.push(item);
        this.nombreItem = '';
    }
    borrar(index: number){
        if(index > -1){
            this.items.splice(index,1)
        }
    }

    ngOnInit() { }
}