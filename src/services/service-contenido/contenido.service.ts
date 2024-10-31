import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContenidoService {
  private apiUrl = 'http://bioaps.uv.es/perapp/infoapp/';

  constructor(private http: HttpClient) {}

  // Método para obtener datos desde el JSON
  obtenerDatosTexto(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
