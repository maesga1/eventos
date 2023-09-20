import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventoService } from '../services/evento.service';
@Component({
  selector: 'app-detalle-evento',
  templateUrl: './detalle-evento.component.html',
  styleUrls: ['./detalle-evento.component.scss']
})
export class DetalleEventoComponent implements OnInit {

  event: any;
  evento: any;
 

  constructor(private route: ActivatedRoute, private eventoService: EventoService) { }

  ngOnInit(): void {
    const eventId = this.route.snapshot.paramMap.get('id') as string;


   
    this.eventoService.obtenerDetalleEvento(eventId).subscribe(evento => {
      this.evento = evento;
    });
  }
}