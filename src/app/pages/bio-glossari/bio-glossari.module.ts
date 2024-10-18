import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BioGlossariPageRoutingModule } from './bio-glossari-routing.module';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';
import { BioGlossariPage } from './bio-glossari.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreContainerComponentModule,
    BioGlossariPageRoutingModule
  ],
  declarations: [BioGlossariPage]
})
export class BioGlossariPageModule {}
