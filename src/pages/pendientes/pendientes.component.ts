import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from '../../app/services/listadeseos.service';
import { NavController } from 'ionic-angular';
import { AgregarComponent } from '../agregar/agregar.component';
import { Listas } from '../../app/classes/listas';
import { DetalleComponent } from '../detalle/detalle.component';



@Component({
    selector: 'app-pendientes',
    templateUrl: './pendientes.component.html'
})
export class PendientesComponent implements OnInit {
    constructor(private _listaDeseos: ListaDeseosService,
                private _navCtrl: NavController) { }

    ngOnInit() { }

    irAgregar(){
        this._navCtrl.push(AgregarComponent);
    }

    verDetalle(lista: Listas, idx: number){
        this._navCtrl.push(DetalleComponent,{lista,idx});
    }

}