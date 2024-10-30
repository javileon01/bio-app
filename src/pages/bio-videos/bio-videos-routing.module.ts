import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BioVideosPage } from './bio-videos.page';

const routes: Routes = [
  {
    path: '',
    component: BioVideosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BioVideosPageRoutingModule {}
