import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [{
        label: 'Pipes de Angular',
        icon: 'pi pi-th-large',
        items: [{
            label: 'Textos y Fechas',
            icon: 'pi pi-calendar-minus',
            routerLink: '/'
        },
        {
            label: 'Números',
            icon: 'pi pi-dollar',
            routerLink: 'numeros'
        },
        {
            label: 'No comunes',
            icon: 'pi pi-globe',
            routerLink: 'no-comunes'
        }],
        
    },
    {
        label: 'Pipes Personalizados',
        icon: 'pi pi-wrench',
        routerLink: 'ordenar'
    }];
}
}
