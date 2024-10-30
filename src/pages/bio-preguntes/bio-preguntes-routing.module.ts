import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BioPreguntesPage } from './bio-preguntes.page';

const routes: Routes = [
  {
    path: '',
    component: BioPreguntesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BioPreguntesPageRoutingModule {}
