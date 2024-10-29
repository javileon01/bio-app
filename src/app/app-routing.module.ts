import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },  {
    path: 'informacio',
    loadChildren: () => import('./pages/informacio/informacio.module').then( m => m.InformacioPageModule)
  },
  {
    path: 'contacte',
    loadChildren: () => import('./pages/contacte/contacte.module').then( m => m.ContactePageModule)
  },
  {
    path: 'manual-usuari',
    loadChildren: () => import('./pages/manual-usuari/manual-usuari.module').then( m => m.ManualUsuariPageModule)
  },
  {
    path: 'webs-recomanats',
    loadChildren: () => import('./pages/webs-recomanats/webs-recomanats.module').then( m => m.WebsRecomanatsPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
