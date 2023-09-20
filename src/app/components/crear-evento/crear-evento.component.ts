import { EventoService } from '../services/evento.service';

import { Component } from '@angular/core';

@Component({
  selector: 'app-crear-evento',
  templateUrl: './crear-evento.component.html',
  styleUrls: ['./crear-evento.component.scss']
})
export class CrearEventoComponent {

  nombre!: string;
  fecha!: string; 
  ubicacion!: string;
  descripcion!: string;

  constructor(private eventoService: EventoService) { }

  crearEvento() {

    const nuevoEvento = {
      nombre: this.nombre,
      fecha: this.fecha,
      ubicacion: this.ubicacion,
      descripcion: this.descripcion
    };


    this.eventoService.crearNuevoEvento(nuevoEvento).subscribe(() => {

    });
  }
}