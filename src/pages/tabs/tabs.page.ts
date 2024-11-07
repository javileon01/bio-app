import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {
  showHeader = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const currentUrl = event.url.split(';')[0];
        // Esconde el header en rutas específicas
        this.showHeader = !['/informacio', '/contacte', '/webs-recomanats', '/manual-usuari', '/glossari-def'].includes(currentUrl);
      }
    });
  }
}
