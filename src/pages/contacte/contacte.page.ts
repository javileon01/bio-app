import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-contacte',
  templateUrl: './contacte.page.html',
  styleUrls: ['./contacte.page.scss'],
})
export class ContactePage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
    // Puedes inicializar datos aquí si es necesario
  }

  goBack() {
    this.navController.back();
  }
}
