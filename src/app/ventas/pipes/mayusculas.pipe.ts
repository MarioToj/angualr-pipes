import { Pipe, PipeTransform } from '@angular/core'

@Pipe({ name: 'mayusculas' })


export class MayusculasPipe implements PipeTransform {
    transform(value: string, enMatyusculas: boolean = true): string {
        return enMatyusculas ? value.toUpperCase() : value.toLocaleLowerCase();
    }
}