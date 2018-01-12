import { Injectable } from '@angular/core';
import { Listas } from '../classes/listas';

@Injectable()
export class ListaDeseosService {
    listas: Listas[] = [];
    constructor() {

        let lista1 = new Listas('Compras de Supermercado');
        let lista2 = new Listas('Juegos que Deseo');
        let lista3 = new Listas('Cosas de la Universidad');

        this.listas.push(lista1);
        this.listas.push(lista2);
        this.listas.push(lista3);
        
        console.log(this.listas);
        console.log('Servicio Inicializado');
    }

}