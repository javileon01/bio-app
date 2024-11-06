import { Component, OnInit } from '@angular/core';
import { GlossariService } from '../../services/service-glossari/glossari.service';
import { ContenidoService } from '../../services/service-contenido/contenido.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-bio-glossari',
  templateUrl: './bio-glossari.page.html',
  styleUrls: ['./bio-glossari.page.scss'],
})
export class BioGlossariPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}