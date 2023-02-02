import { Pipe, PipeTransform } from '@angular/core'

@Pipe({ name: 'vuelaheroe' })


export class vuelaHeroe implements PipeTransform {
    transform(vuela: boolean = true): string {
        return vuela ? 'vuela' : 'no vuela'
    }
}