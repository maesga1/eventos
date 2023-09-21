import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEventosComponent } from './components/lista-eventos/lista-eventos.component';
import { DetalleEventoComponent } from './components/detalle-evento/detalle-evento.component';
import { CrearEventoComponent } from './components/crear-evento/crear-evento.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'evento', component: ListaEventosComponent },
  { path: 'evento/:id', component: DetalleEventoComponent },
  { path: 'crear-evento', component: CrearEventoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
