import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GlossariService } from '../../services/service-glossari/glossari.service';
import { ContenidoService } from '../../services/service-contenido/contenido.service';

@Component({
  selector: 'app-bio-glossari',
  templateUrl: './bio-glossari.page.html',
  styleUrls: ['./bio-glossari.page.scss'],
})
export class BioGlossariPage implements OnInit {
  listaTexto: any[] = [];
  terminosOriginales: any[] = []; // Lista completa de términos sin filtrar
  terminosFiltrados: any[] = []; // Lista de términos filtrados que se mostrará, comienza vacía
  terminoBusqueda: string = '';
  mensajeError: string = '';

  constructor(private navCtrl: NavController, private glossariService: GlossariService, private contenidoService: ContenidoService) {}

  ngOnInit() {
    this.cargarTextoInicial();
    this.cargarTerminosGlossario();
  }

  cargarTextoInicial() {
    this.contenidoService.obtenerDatosTexto().subscribe({
      next: (data) => {
        this.listaTexto = data;
      },
      error: (error) => {
        this.mensajeError = 'Error al cargar datos iniciales. Intente de nuevo.';
        console.error(error);
      },
      complete: () => {
        console.log('Texto inicial cargado correctamente.');
      }
    });
  }

  cargarTerminosGlossario() {
    this.glossariService.obtenerTerminos().subscribe({
      next: (data) => {
        this.terminosOriginales = data;
      },
      error: (error) => {
        this.mensajeError = 'Error al cargar términos del glosario. Intente de nuevo.';
        console.error(error);
      },
      complete: () => {
        console.log('Términos del glosario cargados correctamente.');
      }
    });
  }

  // Método que se ejecuta cuando se presiona el botón de búsqueda
  buscarTerminos() {
    // Verifica que el campo de búsqueda no esté vacío
    if (this.terminoBusqueda && this.terminoBusqueda.trim() !== '') {
        // Normaliza el término de búsqueda
        const terminoNormalizado = this.normalizarTexto(this.terminoBusqueda);

        // Filtra los términos originales para encontrar coincidencias
        this.terminosFiltrados = this.terminosOriginales.filter(item => 
            this.normalizarTexto(item.paraula).includes(terminoNormalizado));
    } else {
        // Deja la lista vacía si el campo de búsqueda está vacío
        this.terminosFiltrados = [];
    }
  }

  normalizarTexto(texto: string): string {
    return texto
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  navegarAGlossariDef(item: any) {
    this.navCtrl.navigateForward(['/glossari-def', { id: item.id }]);
  }
}
