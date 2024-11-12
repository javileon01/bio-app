import { Component, OnInit } from '@angular/core';
import { VideosService } from '../../services/service-videos/videos.service';
import { ContenidoService } from '../../services/service-contenido/contenido.service';

@Component({
  selector: 'app-bio-videos',
  templateUrl: './bio-videos.page.html',
  styleUrls: ['./bio-videos.page.scss'],
})
export class BioVideosPage implements OnInit {
  videos: any[] = [];          // Lista completa de videos
  filteredVideos: any[] = [];   // Lista de videos filtrados para la búsqueda
  textosIntroductorios: any[] = []; // Todos los textos introductorios

  constructor(
    private videosService: VideosService,
    private contenidoService: ContenidoService
  ) {}

  ngOnInit() {
    this.cargarVideos();
    this.cargarTextosIntroductorios();
  }

  // Cargar todos los videos desde el servicio
  cargarVideos() {
    this.videosService.obtenerVideos().subscribe({
      next: (data) => {
        this.videos = data;
        this.filteredVideos = data; // Inicialmente, mostrar todos los videos
      },
      error: (error) => {
        console.error('Error al cargar los videos:', error);
      }
    });
  }

  // Cargar todos los textos introductorios desde el servicio
  cargarTextosIntroductorios() {
    this.contenidoService.obtenerDatosTexto().subscribe({
      next: (data) => {
        this.textosIntroductorios = data; // Cargar todos los textos sin filtrar
      },
      error: (error) => {
        console.error('Error al cargar los textos introductorios:', error);
      }
    });
  }

  // Filtrar los videos en tiempo real a medida que el usuario escribe en la barra de búsqueda
  filtrarVideos(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    if (!searchTerm || searchTerm.trim() === '') {
      this.filteredVideos = this.videos;
    } else {
      this.filteredVideos = this.videos.filter(video =>
        video.titol.toLowerCase().includes(searchTerm)
      );
    }
  }

  // Método para obtener el texto introductorio de un video formateado
  obtenerTituloFormateado(titulo: string) {
    return titulo.endsWith('(BioApS)') ? titulo.slice(0, -9) : titulo;
  }

  // Abrir el video en una página externa
  openVideo(video: any) {
    window.open(video.enllac, '_system'); // Abre en el navegador externo del dispositivo
  }
}
