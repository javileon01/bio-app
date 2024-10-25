import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';
import { BioQuestionariPageRoutingModule } from './bio-questionari-routing.module';
import { BioQuestionariPage } from './bio-questionari.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BioQuestionariPageRoutingModule,
    ExploreContainerComponentModule
  ],
  declarations: [BioQuestionariPage]
})
export class BioQuestionariPageModule {}
