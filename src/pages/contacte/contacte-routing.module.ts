import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactePage } from './contacte.page';

const routes: Routes = [
  {
    path: '',
    component: ContactePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactePageRoutingModule {}
