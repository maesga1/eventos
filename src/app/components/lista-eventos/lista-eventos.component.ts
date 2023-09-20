import { Component, OnInit } from '@angular/core';
import { EventoService } from '../services/evento.service';

@Component({
  selector: 'app-lista-eventos',
  templateUrl: './lista-eventos.component.html',
  styleUrls: ['./lista-eventos.component.scss']
})
export class ListaEventosComponent implements OnInit {
  eventos: any[] = [];

  constructor(private eventoService: EventoService) { }

  ngOnInit(): void {

    this.eventoService.obtenerEventos().subscribe(eventos => {
      this.eventos = eventos;
    });
  }
}