import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BioPreguntesPageRoutingModule } from './bio-preguntes-routing.module';
import { ExploreContainerComponentModule } from '../../components/explore-container/explore-container.module';
import { BioPreguntesPage } from './bio-preguntes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BioPreguntesPageRoutingModule,
    ExploreContainerComponentModule
  ],
  declarations: [BioPreguntesPage]
})
export class BioPreguntesPageModule {}
