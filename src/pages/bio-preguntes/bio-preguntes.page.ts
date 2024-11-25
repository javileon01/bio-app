import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PreguntasService } from '../../services/service-preguntas/preguntas.service';

@Component({
  selector: 'app-bio-preguntes',
  templateUrl: './bio-preguntes.page.html',
  styleUrls: ['./bio-preguntes.page.scss'],
})
export class BioPreguntesPage implements OnInit {
  cuestionarios: any[] = []; // Lista de cuestionarios a mostrar

  constructor(private preguntasService: PreguntasService, private navCtrl: NavController) {}

  ngOnInit() {
    this.cargarCuestionarios();
  }

  cargarCuestionarios() {
    this.preguntasService.obtenerDatosPreguntas().subscribe({
      next: (data) => {
        this.cuestionarios = data;
        console.log('Cuestionarios cargados:', this.cuestionarios);
      },
      error: (error) => {
        console.error('Error al cargar cuestionarios:', error);
      },
    });
  }

  abrirCuestionario(cuestionario: any) {
    // Navegar a la página preg-resolver pasando los datos del cuestionario seleccionado
    this.navCtrl.navigateForward('/preg-resolver', {
      queryParams: { cuestionario: JSON.stringify(cuestionario) },
    });
  }
}
