import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManualUsuariPage } from './manual-usuari.page';

const routes: Routes = [
  {
    path: '',
    component: ManualUsuariPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManualUsuariPageRoutingModule {}
