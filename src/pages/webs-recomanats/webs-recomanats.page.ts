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
        this.errorMessage = 'Error al cargar los datos. Inténtalo de nuevo.';
        console.error(error);
      },
    });
  }

  openLink(datos: any) {
    this.selectedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(datos.enllac);
  }

  closeIframe() {
    this.selectedUrl = null;
  }

  goBack() {
    this.navController.back(); // Navegar hacia atrás en la navegación de Ionic
  }
}
