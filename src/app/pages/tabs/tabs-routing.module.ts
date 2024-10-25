import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'bioGlossari',
        loadChildren: () => import('../bio-glossari/bio-glossari.module').then(m => m.BioGlossariPageModule)
      },
      {
        path: 'bioQuestionari',
        loadChildren: () => import('../bio-questionari/bio-questionari.module').then( m => m.BioQuestionariPageModule)
      },
      {
        path: 'bioVideos',
        loadChildren: () => import('../bio-videos/bio-videos.module').then( m => m.BioVideosPageModule)
      },
      {
        path: 'bioPreguntes',
        loadChildren: () => import('../bio-preguntes/bio-preguntes.module').then( m => m.BioPreguntesPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/bioGlossari',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/bioGlossari',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
