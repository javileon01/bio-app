import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-informacio',
  templateUrl: './informacio.page.html',
  styleUrls: ['./informacio.page.scss'],
})
export class InformacioPage implements OnInit {
  
  constructor(private navController: NavController) { }

  ngOnInit() {
    // Puedes inicializar datos aquí si es necesario
  }

  goBack() {
    this.navController.back();
  }
}
