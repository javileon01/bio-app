import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideosQuizService {
  private apiUrl = 'http://bioaps.uv.es/totesvq/';

  constructor(private http: HttpClient) { 
    console.log('VideosQuizService inicializado');
  }

  // Método para obtener datos de las preguntas de los videos
  obtenerDatosVideosQuiz(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
