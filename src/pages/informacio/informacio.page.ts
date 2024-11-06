import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ContenidoService } from '../../services/service-contenido/contenido.service';

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
        this.errorMessage = 'Error en carregar les dades. Intenta&ndash;ho de nou.'; // Mensaje de error
        console.error(error); // Muestra el error en la consola
      },
      complete: () => {
        console.log('Dades carregades correctament'); // Este es opcional, solo se ejecuta al completar
      }
    });
  }

  goBack() {
    this.navController.back();
  }
}
