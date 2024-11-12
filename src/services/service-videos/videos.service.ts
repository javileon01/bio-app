import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideosService {
  private apiUrl = 'http://bioaps.uv.es/totesv/';

  constructor(private http: HttpClient) {}

  // Método para obtener datos desde el JSON
  obtenerVideos(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
