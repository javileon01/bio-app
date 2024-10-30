import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-webs-recomanats',
  templateUrl: './webs-recomanats.page.html',
  styleUrls: ['./webs-recomanats.page.scss'],
})
export class WebsRecomanatsPage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
    // Puedes inicializar datos aquí si es necesario
  }

  goBack() {
    this.navController.back();
  }

}
