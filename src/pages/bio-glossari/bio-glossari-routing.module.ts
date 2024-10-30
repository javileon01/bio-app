import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { BioGlossariPage } from './bio-glossari.page';

const routes: Routes = [
  {
    path: '',
    component: BioGlossariPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BioGlossariPageRoutingModule {}
