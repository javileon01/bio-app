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
  mostrarRespuestas: boolean = false; // Controla si se muestran las respuestas
  mostrarTimer: boolean = false; // Controla si se muestra el temporizador
  cargandoCuestionario: boolean = true;
  contienePreguntas: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private questionariService: QuestionariService,
    private timerService: TimerService,
    private alertCtrl: AlertController,
    private navController: NavController
  ) {}

  ngOnInit() {
    this.mostrarRespuestas = false;
    this.mostrarTimer = false;
    this.cuestionarioIniciado = false;
    this.cargandoCuestionario = true;
  
    setTimeout(() => {
      this.route.queryParams.subscribe((params) => {
        this.cuestionarioData = params['tema'] 
          ? JSON.parse(params['tema']) 
          : JSON.parse(params['video'] || '{}');
        console.log('Datos del cuestionario:', this.cuestionarioData);
  
        this.cargarPreguntas();
      });
  
      this.mostrarTimer = true;
    }, 700);
  }  

  ngOnDestroy() {
    this.mostrarRespuestas = false;
    this.detenerTemporizador();
  }

  iniciarCuestionario() {
    // Marca el cuestionario como iniciado y comienza el temporizador
    this.cuestionarioIniciado = true;
    this.iniciarTemporizador(15 * 60); // 15 minutos en segundos
  }

  cargarPreguntas() {
    this.questionariService.obtenerDatosPregunta().subscribe({
      next: (data: any[]) => {
        console.log('Preguntas obtenidas:', data);
  
        const filtro = this.cuestionarioData.nombreTema || this.cuestionarioData.ID;
        this.preguntas = data.filter(
          item => item.temes?.includes(filtro) || item.video === filtro
        );

        this.contienePreguntas = this.preguntas.length > 0;
        console.log('Preguntas filtradas:', this.preguntas);
        
        this.preguntas = this.shuffleArray(this.preguntas).slice(0, 10);
        console.log('Preguntas después de barajar:', this.preguntas);
  
        this.cargandoCuestionario = false; // Botón listo para ser presionado
      },
      error: (err) => {
        console.error('Error al cargar las preguntas:', err);
        alert('Hubo un problema al cargar las preguntas. Inténtalo de nuevo.');
        this.cargandoCuestionario = false;
      },
      complete: () => {
        console.log('Carga de preguntas completa');
      }
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
    this.mostrarRespuestas = true
    await this.mostrarResultado();
  }

  async mostrarResultado() {
    // Muestra el puntaje obtenido en una alerta y permite ver los resultados
    const alert = await this.alertCtrl.create({
      header: 'Qüestionari acabat',
      message: `Has obtingut ${this.puntosObtenidos} / ${this.totalPuntos} punts!`,
      buttons: ['Val']
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

  public esRespuestaCorrecta(pregunta: any, respuestaUsuario: string | null): boolean {
    if (this.esPreguntaDeTexto(pregunta)) {
      // Comparar respuestas normalizadas para preguntas de texto
      const correcta = this.normalizarTexto(respuestaUsuario) === this.normalizarTexto(pregunta.correcta);
  
      // Si es correcta, actualiza la respuesta del usuario con el formato original
      if (correcta && respuestaUsuario !== pregunta.correcta) {
        this.respuestas[this.preguntas.indexOf(pregunta)] = pregunta.correcta;
      }
  
      return correcta;
    } else {
      // Para preguntas de opciones, la comparación es directa
      return respuestaUsuario === pregunta.correcta;
    }
  }
  

  esPreguntaDeTexto(pregunta: any): boolean {
    // Verifica si la pregunta es de tipo texto (sin opciones de selección)
    return ['op1', 'op2', 'op3', 'op4'].every(opcion => pregunta[opcion] === 'nohay');
  }

  private normalizarTexto(texto: string | null): string {
    const palabrasIgnoradas = ["i", "el", "la", "els", "les"]; // Añade más si es necesario
    return (texto || '')
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
      .replace(/\s{2,}/g, " ")
      .split(" ") // Divide en palabras
      .filter(palabra => !palabrasIgnoradas.includes(palabra)) // Elimina palabras ignoradas
      .sort() // Ordena alfabéticamente
      .join(" "); // Une de nuevo
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

  reiniciarCuestionario() {
    // Detener cualquier temporizador activo
    this.detenerTemporizador();
  
    // Reiniciar variables de estado
    this.cuestionarioIniciado = false;
    this.mostrarRespuestas = false;
    this.puntosObtenidos = 0;
    this.totalPuntos = 0;
    this.respuestas = [];
    this.tiempoRestante = '15:00';
  
    // Recargar las preguntas y barajarlas de nuevo
    this.cargarPreguntas();
  
    // Reiniciar el temporizador (opcional: ajusta la duración si es necesario)
    setTimeout(() => {
      this.iniciarCuestionario(); // Comienza de nuevo el cuestionario
    }, 500);
  }

  goBack() {
    this.navController.back();
  }
}
