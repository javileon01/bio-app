import { Component, OnInit } from '@angular/core';
import { WebsRecService } from '../../services/service-websRec/webs-rec.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NavController } from '@ionic/angular'; // Importar NavController

@Component({
  selector: 'app-webs-recomanats',
  templateUrl: './webs-recomanats.page.html',
  styleUrls: ['./webs-recomanats.page.scss'],
})
export class WebsRecomanatsPage implements OnInit {
  lista: any[] = [];
  errorMessage: string = '';
  selectedUrl: SafeResourceUrl | null = null;

  constructor(
    private websRecService: WebsRecService,
    private sanitizer: DomSanitizer,
    private navController: NavController,
  ) {}

  ngOnInit() {
    this.cargarDatos();
  }

  cargarDatos() {
    this.websRecService.obtenerDatosTexto().subscribe({
      next: (data) => {
        this.lista = data;
      },
      error: (error) => {
        this.errorMessage = 'Error en carregar les dades. Intenta&ndash;ho de nou.'; // Mensaje de error
        console.error(error);
      },
      complete: () => {
        console.log('Dades carregades correctamen'); // Este es opcional, solo se ejecuta al completar
      }
    });
  }

  openLink(datos: any) {
    // Asigna la URL al iframe de manera segura
    this.selectedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(datos.enllac);
  }

  closeIframe() {
     // Cierra el iframe y muestra la lista de webs
    this.selectedUrl = null;
  }

  goBack() {
    this.navController.back(); // Navegar hacia atrás en la navegación de Ionic
  }
}
