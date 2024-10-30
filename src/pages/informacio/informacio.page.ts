import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { InformacioService } from '../../services/service-informacio/informacio.service';

@Component({
  selector: 'app-informacio',
  templateUrl: './informacio.page.html',
  styleUrls: ['./informacio.page.scss'],
})
export class InformacioPage implements OnInit {
  listaTexto: any[] = [];
  errorMessage: string = '';
  
  constructor(
    private navController: NavController,
    private informacioService: InformacioService
  ) { }

  ngOnInit() {
    this.cargarDatos();
  }

  cargarDatos() {
    this.informacioService.obtenerDatosTexto().subscribe({
      next: (data) => {
        this.listaTexto = data; // Asigna los datos obtenidos a listaTexto
      },
      error: (error) => {
        this.errorMessage = 'Error al cargar los datos. Inténtalo de nuevo.';
        console.error(error); // Muestra el error en la consola
      },
      complete: () => {
        console.log('Datos cargados correctamente'); // Este es opcional, solo se ejecuta al completar
      }
    });
  }

  goBack() {
    this.navController.back();
  }
}
