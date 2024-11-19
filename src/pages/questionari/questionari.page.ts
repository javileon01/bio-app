import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { NavController } from '@ionic/angular';
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
  cuestionarioData: any = null; // Datos del tema o video seleccionados
  preguntas: any[] = []; // Preguntas cargadas para el cuestionario
  respuestas: string[] = []; // Respuestas del usuario para cada pregunta
  totalPuntos: number = 0; // Puntos totales del cuestionario
  puntosObtenidos: number = 0; // Puntos obtenidos por el usuario
  timerSubscription: Subscription | null = null; // Suscripción del temporizador
  tiempoRestante: string = '15:00'; // Tiempo restante mostrado en la interfaz
  cuestionarioIniciado: boolean = false; // Controla si el cuestionario ha comenzado

  constructor(
    private route: ActivatedRoute,
    private questionariService: QuestionariService,
    private timerService: TimerService,
    private alertCtrl: AlertController,
    private navController: NavController
  ) {}

  ngOnInit() {
    // Cargar los datos del tema o video al iniciar la página
    this.route.queryParams.subscribe((params) => {
      this.cuestionarioData = params['tema'] ? JSON.parse(params['tema']) : JSON.parse(params['video'] || '{}');
      this.cargarPreguntas();
    });
  }

  ngOnDestroy() {
    this.detenerTemporizador();
  }

  iniciarCuestionario() {
    // Marca el cuestionario como iniciado y comienza el temporizador
    this.cuestionarioIniciado = true;
    this.iniciarTemporizador(15 * 60); // 15 minutos en segundos
  }

  cargarPreguntas() {
    // Cargar preguntas en función del tema o ID de video
    this.questionariService.obtenerDatosPregunta().subscribe((data: Array<{ temes: string; video: string; }>) => {
      const filtro = this.cuestionarioData.nombreTema || this.cuestionarioData.ID;
      
      // Filtra preguntas que coinciden con el tema o video
      this.preguntas = data.filter(item => item.temes?.includes(filtro) || item.video === filtro);

      // Aleatoriza las preguntas usando Fisher-Yates Shuffle
      this.preguntas = this.shuffleArray(this.preguntas).slice(0, 10); // Limita a 10 preguntas
    });
  }

  // Método de Fisher-Yates para aleatorizar un array
  private shuffleArray(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Genera un índice aleatorio
      [array[i], array[j]] = [array[j], array[i]]; // Intercambia los elementos
    }
    return array;
  }

  abrirVideo() {
    // Abre el enlace del video en una nueva pestaña
    if (this.cuestionarioData?.enllac) {
      window.open(this.cuestionarioData.enllac, '_blank');
    }
  }

  seleccionarRespuesta(preguntaIndex: number, respuesta: string) {
    // Guarda la respuesta del usuario para la pregunta especificada
    this.respuestas[preguntaIndex] = respuesta;
  }

  async finalizarCuestionario() {
    // Detiene el temporizador y calcula el puntaje obtenido
    this.detenerTemporizador();
    this.calcularPuntaje();
    await this.mostrarResultado();
  }

  async mostrarResultado() {
    // Muestra el puntaje obtenido en una alerta y permite ver los resultados
    const alert = await this.alertCtrl.create({
      header: 'Qüestionari acabat',
      message: `Has obtingut ${this.puntosObtenidos} / ${this.totalPuntos} punts!`,
    });
    await alert.present();
  }

  calcularPuntaje() {
    // Calcula el puntaje total del usuario y el puntaje máximo del cuestionario
    this.puntosObtenidos = 0;
    this.totalPuntos = 0;

    this.preguntas.forEach((pregunta, index) => {
      this.totalPuntos += pregunta.punt; // Suma el puntaje de cada pregunta al total
      const respuestaUsuario = this.respuestas[index];

      if (this.esRespuestaCorrecta(pregunta, respuestaUsuario)) {
        this.puntosObtenidos += pregunta.punt; // Suma puntos si la respuesta es correcta
      }
    });
  }

  private esRespuestaCorrecta(pregunta: any, respuestaUsuario: string | null): boolean {
    // Comprueba si la respuesta del usuario es correcta
    if (this.esPreguntaDeTexto(pregunta)) {
      return this.normalizarTexto(respuestaUsuario) === this.normalizarTexto(pregunta.correcta);
    }
    return respuestaUsuario === pregunta.correcta;
  }

  esPreguntaDeTexto(pregunta: any): boolean {
    // Verifica si la pregunta es de tipo texto (sin opciones de selección)
    return ['op1', 'op2', 'op3', 'op4'].every(opcion => pregunta[opcion] === 'nohay');
  }

  private normalizarTexto(texto: string | null): string {
    // Normaliza el texto para comparar sin importar mayúsculas, minúsculas o acentos
    return (texto || '').trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  iniciarTemporizador(duracion: number) {
    // Inicia el temporizador y actualiza el tiempo restante
    this.timerSubscription = this.timerService.startTimer(duracion).subscribe((tiempoRestante: string) => {
      this.tiempoRestante = tiempoRestante;
      if (tiempoRestante === '00:00') {
        this.finalizarCuestionario(); // Finaliza el cuestionario cuando el tiempo se agota
      }
    });
  }

  detenerTemporizador() {
    // Detiene el temporizador
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
      this.timerSubscription = null;
    }
  }

  goBack() {
    this.navController.back();
  }
}
