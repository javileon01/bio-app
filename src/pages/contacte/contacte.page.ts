import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ContenidoService } from '../../services/service-contenido/contenido.service';

@Component({
  selector: 'app-contacte',
  templateUrl: './contacte.page.html',
  styleUrls: ['./contacte.page.scss'],
})
export class ContactePage implements OnInit {
  listaTexto: any[] = [];
  errorMessage: string = '';
  
  constructor(
    private navController: NavController,
    private contenidoService: ContenidoService
  ) { }

  ngOnInit() {
    this.cargarDatos();
  }

  cargarDatos() {
    this.contenidoService.obtenerDatosTexto().subscribe({
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