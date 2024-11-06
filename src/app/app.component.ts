import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  showHeader = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Ocultar el header en la página de 'informacio' o cualquier otra página
        const currentUrl = event.url.split(';')[0]; // Cambiado a ';' para manejar el formato de la URL
        console.log('Navegando a:', event.url); // Verifica la URL
        this.showHeader = !['/informacio', '/contacte', '/webs-recomanats', '/manual-usuari','/glossari-def'].includes(currentUrl);
      }
    });
  }
}