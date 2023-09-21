import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventoService } from '../services/evento.service';
@Component({
  selector: 'app-detalle-evento',
  templateUrl: './detalle-evento.component.html',
  styleUrls: ['./detalle-evento.component.scss']
})
export class DetalleEventoComponent implements OnInit {

  evento: any;
 

  constructor(private route: ActivatedRoute, private eventoService: EventoService) { }

 ngOnInit(): void {
    
    const eventoId = this.route.snapshot.paramMap.get('id');

    
    this.obtenerDetalleEvento(eventoId);
  }

  obtenerDetalleEvento(eventoId: string | null): void {
    if (eventoId !== null) {
      this.eventoService.obtenerDetalleEvento(eventoId).subscribe((evento: any) => {
        this.evento = evento;
      });
    } else {
      console.error('El parámetro "id" es nulo.');
    }
  }
}






