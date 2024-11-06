import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { GlossariService } from '../../services/service-glossari/glossari.service';

@Component({
  selector: 'app-glossari-def',
  templateUrl: './glossari-def.page.html',
  styleUrls: ['./glossari-def.page.scss'],
})
export class GlossariDefPage implements OnInit {
  datosPalabra: any;

  constructor(
    private route: ActivatedRoute,
    private glossariService: GlossariService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    // Obtiene el ID del término desde la URL
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      // Llama al servicio para obtener el término por ID
      this.glossariService.obtenerTerminoPorId(id).subscribe(data => {
        this.datosPalabra = data;
      });
    }
  }

  // Método para regresar a la página anterior
  goBack() {
    this.navCtrl.back();
  }
}
