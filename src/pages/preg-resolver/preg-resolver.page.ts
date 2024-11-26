import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-preg-resolver',
  templateUrl: './preg-resolver.page.html',
  styleUrls: ['./preg-resolver.page.scss'],
})
export class PregResolverPage implements OnInit {
  cuestionarioData: any = null; // Datos del cuestionario seleccionado
  opciones: string[] = []; // Opciones de respuesta
  respuestaSeleccionada: string | null = null; // Respuesta seleccionada por el usuario
  fechaPublicacion: string = ''; // Fecha de publicación introducida por el usuario
  mostrarRespuestas: boolean = false; // Controla si se muestran las respuestas

  constructor(private navController: NavController, private route: ActivatedRoute) {}

  ngOnInit() {
    // Cargar datos del cuestionario desde las rutas
    this.route.queryParams.subscribe((params) => {
      this.cuestionarioData = JSON.parse(params['cuestionario'] || '{}');

      // Opciones de respuesta (sin valores "nohay")
      this.opciones = [
        this.cuestionarioData.r1,
        this.cuestionarioData.r2,
        this.cuestionarioData.r3,
        this.cuestionarioData.r4,
      ];
    });
  }

  seleccionarRespuesta(opcion: string) {
    this.respuestaSeleccionada = opcion;
  }

  finalizarCuestionario() {
    this.mostrarRespuestas = true; // Muestra la retroalimentación de las respuestas
  }

  esRespuestaCorrecta(opcion: string): boolean {
    return opcion === this.cuestionarioData.correcta;
  }

  esFechaCorrecta(fecha: string | null): boolean {
    if (!fecha) {
      return false;
    }
  
    const fechaLimpiada = fecha.trim().replace(/\s+/g, ''); // Elimina espacios adicionales
    return fechaLimpiada === this.cuestionarioData.data.trim();
  }  

  goBack() {
    this.navController.back();
  }
}
