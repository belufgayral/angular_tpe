import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HerbsListComponent } from './herbs-list/herbs-list.component';
import { CarritoComprasComponent } from './carrito-compras/carrito-compras.component';
import { FormsModule } from '@angular/forms';
import { HerbsSectionComponent } from './herbs-section/herbs-section.component';
import { ApothecaryAboutComponent } from './apothecary-about/apothecary-about.component';
import { InputNumberComponent } from './input-number/input-number.component';

@NgModule({
  declarations: [
    AppComponent,
    HerbsListComponent,
    CarritoComprasComponent,
    HerbsSectionComponent,
    ApothecaryAboutComponent,
    InputNumberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
