import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BioQuestionariPage } from './bio-questionari.page';

const routes: Routes = [
  {
    path: '',
    component: BioQuestionariPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BioQuestionariPageRoutingModule {}
