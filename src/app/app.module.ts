import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//Modulo Personalizado
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';

import localGt from '@angular/common/locales/es-GT'
import localFr from '@angular/common/locales/fr'
import { registerLocaleData } from '@angular/common'
registerLocaleData(localGt)
registerLocaleData(localFr)

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRouterModule,
    VentasModule
  ],
  providers: [{
    provide: LOCALE_ID, useValue: 'es-GT'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
