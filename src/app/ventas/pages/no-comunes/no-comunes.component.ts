import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'Mario'
  genero: string = 'masculino'

  invitacionMap = {
    'masculino':'invitarlo',
    'femenino':'invitarla'
  }
  //i18nPlural
  clientes: string [] = [
    'Mario',
    'Pedro',
    'Miguel',
    'Sesio',
    'Agusto'
  ]
  clientesMapa = {
    '=0': 'No tenemos ni un cliente esperando',
    '=1': 'Tenemos un cliente esperando',
    'other': 'Tenemos # clientes esperando',
  }

  cambiarCliente(){
    this.nombre = 'Elsa'
    this.genero = 'femenino'
  }

  borrarCliente(){
    this.clientes.shift()
  }


  //keyValue Pipe

  perosona = {
    nombre: 'Mario',
    edad: 19,
  }

  //Json pipe
  heroes = [
    {
      nombre: 'superman',
      vuela: true
    },
    {
      nombre: 'Spiderman',
      vuela: false
    },
    {
      nombre: 'aquaman',
      vuela: false
    },
  ]

  myObservable = interval(3000)

  valorPromesa = new Promise(( resolve, reject ) => {
    setTimeout(() => {
      resolve( 'Tenemos data de promesa' )
    }, 3500);
  })
}

