import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Esto garantiza que el servicio se provea en la raíz de la aplicación
})
export class QuestionariService {
  private apiUrl = 'http://bioaps.uv.es/totesq/'; // URL del JSON con las preguntas del cuestionario

  constructor(private http: HttpClient) {
    console.log('QuestionariService inicializado');
  }

  // Método para obtener los datos de las preguntas del cuestionario
  obtenerDatosPregunta(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
