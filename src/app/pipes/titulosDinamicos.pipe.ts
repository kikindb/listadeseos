import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'titulosDinamicos'})
export class TitulosDinamicosPipe implements PipeTransform {
    transform(value: string,defaultText: string): string {

        return (value) ? value : defaultText;
        
    }
}