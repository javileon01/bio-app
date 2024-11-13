import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Hace que el servicio esté disponible en toda la aplicación
})
export class TemasService {
  private apiUrl = 'http://bioaps.uv.es/totestemquest/'; // URL del JSON con los temas

  constructor(private http: HttpClient) {
    console.log('TemasService inicializado');
  }

  // Método para obtener los datos de los temas
  obtenerTemasPregunta(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
