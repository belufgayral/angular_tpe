import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HerbsListComponent } from './herbs-list/herbs-list.component';
import { CarritoComprasComponent } from './carrito-compras/carrito-compras.component';

@NgModule({
  declarations: [
    AppComponent,
    HerbsListComponent,
    CarritoComprasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
