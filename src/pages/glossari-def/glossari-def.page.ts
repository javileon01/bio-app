import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlossariService } from '../../services/service-glossari/glossari.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-glossari-def',
  templateUrl: './glossari-def.page.html',
  styleUrls: ['./glossari-def.page.scss'],
})
export class GlossariDefPage implements OnInit {
  palabraData: any; // Datos completos de la palabra actual
  palabraTitulo: string = ''; // Título de la palabra con capitalización
  textoRelacionado: string = ''; // Texto formateado de término relacionado
  terminoCapitalizado: string = ''; // Término relacionado con capitalización
  terminoRelacionado: string = ''; // Término relacionado sin "Vegeu " ni punto final
  iframeUrl: SafeResourceUrl | null = null; // URL segura para el iframe
  esTerminoRelacionadoDisponible: boolean = false; // Estado de disponibilidad del término relacionado
  esConsultaRelacionadaCompleta: boolean = false; // Estado de consulta relacionada completa
  esTerminoRelacionadoValido: boolean = false; // Estado de validez del término relacionado

  constructor(
    private route: ActivatedRoute,
    private glossariService: GlossariService,
    private sanitizer: DomSanitizer,
    private navCtrl: NavController,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.cargarDatosPalabra(id);
    }
  }

  // Método para cargar los datos de la palabra
  cargarDatosPalabra(id: string) {
    // Obtener los datos de la palabra por su ID
    this.glossariService.obtenerTerminoPorId(id).subscribe(data => {
      this.palabraData = data;

      if (this.palabraData?.paraula) {
        this.palabraTitulo = this.capitalizarPrimeraLetra(this.palabraData.paraula);
      }

      if (this.palabraData?.txten) {
        // Extraer el término relacionado quitando "vegeu " y el punto final
        this.terminoRelacionado = this.palabraData.txten.replace(/vegeu /i, '').replace(/\.$/, '');

        // Validar si el término relacionado es válido (más de una letra y solo caracteres alfabéticos)
        this.esTerminoRelacionadoValido = this.terminoRelacionado.length > 1 && 
        /^[a-zA-Z\sÀ-ÿ]+$/.test(this.terminoRelacionado);

        this.terminoCapitalizado = this.capitalizarPrimeraLetra(this.terminoRelacionado);
        this.textoRelacionado = `Vegeu: "${this.terminoCapitalizado}"`;

        // Verifica si el término relacionado existe
        this.glossariService.obtenerTerminoPorNombre(this.terminoRelacionado).subscribe((resultado) => {
          this.esTerminoRelacionadoDisponible = !!resultado; // Actualiza si el término fue encontrado
          this.esConsultaRelacionadaCompleta = true; // Marca la consulta como completa
        });
      } else {
        // Si no hay `txten`, asegurarse de que no se muestre ni el botón ni el mensaje de ayuda
        this.textoRelacionado = '';
        this.esTerminoRelacionadoDisponible = false;
        this.esConsultaRelacionadaCompleta = false;
        this.esTerminoRelacionadoValido = false;
        }
    });
  }

  // Método para capitalizar la primera letra
  capitalizarPrimeraLetra(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  // Método para abrir Viquipèdia en el iframe
  abrirIframeViquipedia() {
    if (this.palabraData.viqui) {
      this.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.palabraData.viqui);
    }
  }

  // Métodos para abrir enlaces en una nueva pestaña
  abrirEnlaceEnciclopedia() {
    if (this.palabraData.encic) {
      window.open(this.palabraData.encic, '_blank');
    }
  }

  abrirEnlaceDNV() {
    if (this.palabraData?.paraula) {
      const dnvUrl = `http://www.avl.gva.es/lexicval/dnv?paraula=${this.palabraData.paraula}`;
      window.open(dnvUrl, '_blank');
    }
  }

  // Método para redirigir a la palabra relacionada en `txten`
  redirigirATerminoRelacionado() {
    if (this.esTerminoRelacionadoDisponible) {
      this.glossariService.obtenerTerminoPorNombre(this.terminoRelacionado).subscribe((resultado) => {
        if (resultado) {
          this.router.navigate(['/glossari-def', { id: resultado.id }]);
        }
      });
    }
  }

  // Método para cerrar el iframe
  cerrarIframe() {
    this.iframeUrl = null;
  }

  // Método para regresar a la página anterior
  goBack() {
    this.navCtrl.back();
  }
}
