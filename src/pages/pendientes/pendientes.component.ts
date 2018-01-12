import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from '../../app/services/listadeseos.service';


@Component({
    selector: 'app-pendientes',
    templateUrl: './pendientes.component.html'
})
export class PendientesComponent implements OnInit {
    constructor(private _listaDeseos: ListaDeseosService) { }

    ngOnInit() { }
}