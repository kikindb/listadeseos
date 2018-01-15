import { Pipe, PipeTransform } from '@angular/core';
import { Listas } from '../classes/index';


@Pipe({name: 'pendientes', pure: false})
export class PendientesPipe implements PipeTransform {
    transform(listas: Listas[], isComplete: boolean = false): Listas[] {
        let nuevaLista: Listas[] = [];
        for (let lista of listas) {
            if(lista.isComplete == isComplete){
                nuevaLista.push(lista);
            }            
        }
        return nuevaLista;
    }
}