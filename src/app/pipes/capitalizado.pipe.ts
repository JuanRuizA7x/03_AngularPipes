import { Pipe, PipeTransform } from '@angular/core';
import { Type } from '@angular/compiler';

@Pipe({name: 'capitalizado'})
export class CapitalizadoPipe implements PipeTransform {
    transform(value: string, todas: boolean = true): string {

        value = value.toLowerCase();
        const nombres = value.split(' ');
        let retorno = '';

        if (todas) {
            nombres.forEach(element => {
                element = element[0].toUpperCase() + element.substring(1);
                retorno += element + ' ';
            });
            return retorno.trim();
        } else {
            nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substring(1);
            return nombres.join(' ');
        }
    }
}
