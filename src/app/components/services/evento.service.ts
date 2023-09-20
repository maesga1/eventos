

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  private baseUrl = 'http://localhost:8000/evento'; 

  constructor(private http: HttpClient) { }

  obtenerEventos(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  obtenerDetalleEvento(eventId: string): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }

  crearNuevoEvento(evento: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/evento`, evento);
  }


}
