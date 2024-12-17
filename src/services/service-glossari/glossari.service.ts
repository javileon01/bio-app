import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GlossariService {
  private apiUrl = 'http://bioaps.uv.es/perapp/totes/'; // URL del servidor
  // private apiUrl = 'https://www.uv.es/bioaps/apps/totes.txt'; // URL en https (no funciona)

  constructor(private http: HttpClient) {}

  // Método para obtener todos los términos
  obtenerTerminos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Método para obtener un término por su ID
  obtenerTerminoPorId(id: string): Observable<any | undefined> {
    return this.obtenerTerminos().pipe(
      map(terminos => terminos.find(item => item.id === Number(id))) // Convertir a número para comparar
    );
  }

   // Método para obtener un término por su nombre (paraula)
   obtenerTerminoPorNombre(nombre: string): Observable<any | undefined> {
    return this.obtenerTerminos().pipe(
      map(terminos => terminos.find(item => item.paraula === nombre))
    );
  }
}
