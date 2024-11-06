import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlossariService {
  private apiUrl = 'http://bioaps.uv.es/totes/'; // URL del JSON de términos

  constructor(private http: HttpClient) {}

  // Método para obtener todos los términos
  obtenerTerminos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
