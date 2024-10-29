import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BioVideosPageRoutingModule } from './bio-videos-routing.module';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';
import { BioVideosPage } from './bio-videos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BioVideosPageRoutingModule,
    ExploreContainerComponentModule
  ],
  declarations: [BioVideosPage]
})
export class BioVideosPageModule {}
