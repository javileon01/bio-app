import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionariService } from '../../services/service-questionari/questionari.service';
import { TimerService } from '../../services/service-timer/timer.service';
import { AlertController } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-questionari',
  templateUrl: './questionari.page.html',
  styleUrls: ['./questionari.page.scss'],
})
export class QuestionariPage implements OnInit, OnDestroy {
  cuestionarioData: any = null; // Contiene los datos del tema o video
  preguntas: any[] = [];
  respuestas: any[] = [];
  totalPuntos: number = 0;
  puntosObtenidos: number = 0;
  timerSubscription: Subscription | null = null;
  tiempoRestante: string = '15:00';
  cuestionarioIniciado: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private questionariService: QuestionariService,
    private timerService: TimerService,
    private alertCtrl: AlertController,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params['tema']) {
        this.cuestionarioData = JSON.parse(params['tema']);
      } else if (params['video']) {
        this.cuestionarioData = JSON.parse(params['video']);
      }
      console.log("Datos del cuestionario:", this.cuestionarioData); // Verifica los datos en consola
      this.cargarPreguntas();
    });
  }
    

  ngOnDestroy() {
    this.detenerTemporizador();
  }

  iniciarCuestionario() {
    this.cuestionarioIniciado = true;
    this.iniciarTemporizador(15 * 60); // 15 minutos en segundos
  }

  cargarPreguntas() {
    this.questionariService.obtenerDatosPregunta().subscribe((data: Array<{ temes: string; video: string; }>) => {
      if (this.cuestionarioData.tema) {
        // Filtra por temas si es un cuestionario de tema
        this.preguntas = data.filter((item) => item.temes.includes(this.cuestionarioData.tema));
      } else if (this.cuestionarioData.ID) {
        // Filtra por video si es un cuestionario de video
        this.preguntas = data.filter((item) => item.video === this.cuestionarioData.ID);
      }
      this.preguntas = this.preguntas.slice(0, 10); // Límite de 10 preguntas
    });
  }  

  abrirVideo() {
    if (this.cuestionarioData?.enllac) {
      window.open(this.cuestionarioData.enllac, '_blank');
    }
  } 

  seleccionarRespuesta(preguntaIndex: number, respuesta: string) {
    this.respuestas[preguntaIndex] = respuesta;
  }

  async finalizarCuestionario() {
    this.detenerTemporizador();
    this.calcularPuntaje();

    const alert = await this.alertCtrl.create({
      header: 'Qüestionari acabat',
      message: `Has obtingut ${this.puntosObtenidos} / ${this.totalPuntos} punts!`,
      buttons: [
        {
          text: 'Ver resultados',
          handler: () => {
            this.router.navigate(['/resultados-quiz'], {
              queryParams: {
                puntosObtenidos: this.puntosObtenidos,
                totalPuntos: this.totalPuntos,
              },
            });
          },
        },
      ],
    });
    await alert.present();
  }

  calcularPuntaje() {
    this.puntosObtenidos = 0;
    this.totalPuntos = 0;
  
    this.preguntas.forEach((pregunta, index) => {
      this.totalPuntos += pregunta.punt;
      const respuestaUsuario = this.respuestas[index];
  
      if (pregunta.op1 === 'nohay' && pregunta.op2 === 'nohay' && pregunta.op3 === 'nohay' && pregunta.op4 === 'nohay') {
        if (respuestaUsuario && this.normalizarTexto(respuestaUsuario) === this.normalizarTexto(pregunta.correcta)) {
          this.puntosObtenidos += pregunta.punt;
        }
      } else {
        if (respuestaUsuario === pregunta.correcta) {
          this.puntosObtenidos += pregunta.punt;
        }
      }
    });
  }

  private normalizarTexto(texto: string): string {
    return texto
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  iniciarTemporizador(duracion: number) {
    this.timerSubscription = this.timerService.startTimer(duracion).subscribe(
      (tiempoRestante: string) => {
        this.tiempoRestante = tiempoRestante;
        if (tiempoRestante === '00:00') {
          this.finalizarCuestionario();
        }
      }
    );
  }

  detenerTemporizador() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
      this.timerSubscription = null;
    }
  }
}