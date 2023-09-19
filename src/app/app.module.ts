import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaEventosComponent } from './components/lista-eventos/lista-eventos.component';
import { DetalleEventoComponent } from './components/detalle-evento/detalle-evento.component';
import { CrearEventoComponent } from './components/crear-evento/crear-evento.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaEventosComponent,
    DetalleEventoComponent,
    CrearEventoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
