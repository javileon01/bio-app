import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  startTimer(duracion: number): Observable<string> {
    return timer(0, 1000).pipe(
      map((segundos) => duracion - segundos),
      takeWhile((tiempo) => tiempo >= 0),
      map((tiempo) => this.formatTiempo(tiempo))
    );
  }

  private formatTiempo(segundos: number): string {
    const minutos = Math.floor(segundos / 60);
    const seg = segundos % 60;
    return `${this.pad(minutos)}:${this.pad(seg)}`;
  }

  private pad(num: number): string {
    return num < 10 ? `0${num}` : num.toString();
  }
}