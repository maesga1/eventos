import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'eventos', component: ListaEventosComponent },
  { path: 'evento/:id', component: DetalleEventoComponent },
  { path: 'crear-evento', component: CrearEventoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
