import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaEventosComponent } from './components/lista-eventos/lista-eventos.component';
import { DetalleEventoComponent } from './components/detalle-evento/detalle-evento.component';
import { CrearEventoComponent } from './components/crear-evento/crear-evento.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListaEventosComponent,
    DetalleEventoComponent,
    CrearEventoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
