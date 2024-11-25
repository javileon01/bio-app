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
        // Extraer la parte base de la URL usando una expresión regular
        const baseUrlMatch = event.url.match(/^\/([^;?|#]*)/);
        const pageName = baseUrlMatch ? baseUrlMatch[1] : '';
        console.log('Navegado a la página:', pageName);
  
        // Muestra u oculta el encabezado dependiendo del nombre de la página
        this.showHeader = !['informacio', 'contacte', 'webs-recomanats', 
        'manual-usuari', 'glossari-def', 'questionari', 'preg-resolver'].includes(pageName);
      }
    });
  }  
}