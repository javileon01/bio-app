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
        this.showHeader = !['/informacio', '/contacte', '/webs-recomanats', '/manual-usuari'].includes(event.url);
      }
    });
  }
}