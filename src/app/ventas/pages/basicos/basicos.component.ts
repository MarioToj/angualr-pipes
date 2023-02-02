import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
})
export class BasicosComponent {

  nombreLowerCase: string = 'MARIO'
  nombreUpperCase: string = 'mario'
  nombreTitleCase: string = 'Mario alvarez'

  fecha: Date = new Date()

}
