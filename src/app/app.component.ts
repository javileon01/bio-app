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
        // Aquí puedes ocultar el encabezado en rutas específicas si lo necesitas
        const currentUrl = event.url.split(';')[0];
        this.showHeader = !['/informacio', '/contacte', '/webs-recomanats', '/manual-usuari', '/glossari-def'].includes(currentUrl);
      }
    });
  }
}