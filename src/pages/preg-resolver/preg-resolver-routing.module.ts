import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PregResolverPage } from './preg-resolver.page';

const routes: Routes = [
  {
    path: '',
    component: PregResolverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PregResolverPageRoutingModule {}
