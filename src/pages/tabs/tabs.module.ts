import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { BioGlossariPageModule } from '../bio-glossari/bio-glossari.module';
import { BioQuestionariPageModule } from '../bio-questionari/bio-questionari.module';
import { BioVideosPageModule } from '../bio-videos/bio-videos.module';
import { BioPreguntesPageModule } from '../bio-preguntes/bio-preguntes.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    BioGlossariPageModule,
    BioQuestionariPageModule,
    BioVideosPageModule,
    BioPreguntesPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
