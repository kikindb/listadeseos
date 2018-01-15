import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from '../../app/services/listadeseos.service';
import { NavController } from 'ionic-angular';
import { Listas } from '../../app/classes/listas';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
    selector: 'app-terminados',
    templateUrl: './terminados.component.html',
})
export class TerminadosComponent implements OnInit {
    constructor(private _listaDeseos: ListaDeseosService,
        private _navCtrl: NavController) { }

    ngOnInit() { }

    verDetalle(lista: Listas, idx: number){
        this._navCtrl.push(DetalleComponent,{lista,idx});
    }
}