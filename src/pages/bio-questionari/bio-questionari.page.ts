import { Component, OnInit } from '@angular/core';
import { TemasService } from '../../services/service-temas/temas.service';
import { VideosQuizService } from '../../services/service-videos-quiz/videos-quiz.service';
import { ContenidoService } from '../../services/service-contenido/contenido.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-bio-questionari',
  templateUrl: './bio-questionari.page.html',
  styleUrls: ['./bio-questionari.page.scss'],
})
export class BioQuestionariPage implements OnInit {
  temas: any[] = [];
  videosQuiz: any[] = [];
  textosIntroductorios: any[] = [];
  temaSeleccionado: string | null = null; // Inicializa con null
  videoSeleccionado: string | null = null; // Inicializa con null

  constructor(
    private temasService: TemasService,
    private videosQuizService: VideosQuizService,
    private contenidoService: ContenidoService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.cargarTemas();
    this.cargarVideosQuiz();
    this.cargarTextosIntroductorios();
  }

  cargarTemas() {
    this.temasService.obtenerTemasPregunta().subscribe({
      next: (data) => {
        this.temas = data;
      },
      error: (error) => {
        console.error('Error al cargar los temas:', error);
      }
    });
  }
  
  cargarVideosQuiz() {
    this.videosQuizService.obtenerDatosVideosQuiz().subscribe({
      next: (data) => {
        this.videosQuiz = data;
      },
      error: (error) => {
        console.error('Error al cargar los videos:', error);
      }
    });
  }
  
  cargarTextosIntroductorios() {
    this.contenidoService.obtenerDatosTexto().subscribe({
      next: (data) => {
        this.textosIntroductorios = data;
      },
      error: (error) => {
        console.error('Error al cargar los textos introductorios:', error);
      }
    });
  }  

  iniciarCuestionario() {
    if (this.temaSeleccionado) {
      const tema = {
        title: this.temaSeleccionado,
        tema: this.temaSeleccionado
      };
      this.navCtrl.navigateForward('/questionari', {
        queryParams: { tema: JSON.stringify(tema) }
      });
    } else if (this.videoSeleccionado) {
      const video = this.videosQuiz.find(v => v.ID === this.videoSeleccionado);
      if (video) {
        this.navCtrl.navigateForward('/questionari', {
          queryParams: { video: JSON.stringify(video) }
        });
      }
    } else {
      console.log('Seleccione un tema o un video para iniciar el cuestionario');
    }
  } 

  verificarSeleccion(tipo: string) {
    // Verifica si el valor seleccionado es undefined o vacío
    if (tipo === 'tema' && this.temaSeleccionado === undefined) {
      this.temaSeleccionado = null; // Asigna null explícitamente
    }

    if (tipo === 'video' && this.videoSeleccionado === undefined) {
      this.videoSeleccionado = null; // Asigna null explícitamente
    }
  }

  capitalizarPrimeraLetra(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
}
