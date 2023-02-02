import { NgModule } from '@angular/core';

import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
import { AccordionModule } from 'primeng/accordion';
import { FieldsetModule } from 'primeng/fieldset';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  exports: [
    ButtonModule,
    CardModule,
    MenubarModule,
    PanelModule,
    AccordionModule,
    FieldsetModule,
    ToolbarModule, 
    TableModule
  ]
})
export class PrimeNgModule { }
