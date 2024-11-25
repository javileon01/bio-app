import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {
  private apiUrl = 'http://bioaps.uv.es/perapp/totesbp/'; // URL del JSON con los datos de las preguntas

  constructor(private http: HttpClient) {
    console.log('PreguntasService inicializado');
  }

  // Método para obtener los datos de las preguntas
  obtenerDatosPreguntas(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
