import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-manual-usuari',
  templateUrl: './manual-usuari.page.html',
  styleUrls: ['./manual-usuari.page.scss'],
})
export class ManualUsuariPage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
    // Puedes inicializar datos aquí si es necesario
  }

  goBack() {
    this.navController.back();
  }

}
