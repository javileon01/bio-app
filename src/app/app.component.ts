import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  showHeader = true;

  constructor(private router: Router, private platform: Platform) {
    this.showSplashScreen();
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const baseUrlMatch = event.urlAfterRedirects.match(/^\/([^;?|#]*)/);
        const pageName = baseUrlMatch ? baseUrlMatch[1] : '';
        console.log('Navegado a la página:', pageName);

        this.showHeader = ![
          'informacio', 
          'contacte', 
          'webs-recomanats', 
          'manual-usuari', 
          'glossari-def', 
          'questionari', 
          'preg-resolver'
        ].includes(pageName);
      }
    });
  }

  async showSplashScreen() {
    await SplashScreen.show({
      showDuration: 3000,
      autoHide: true,
    });
  }
}
