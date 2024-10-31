import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsRecService {
  private apiUrl = 'http://bioaps.uv.es/totesw/'; // URL de la API

  constructor(private http: HttpClient) {}

  // Método para obtener los datos de las webs recomendadas
  obtenerDatosTexto(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
