import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManualUsuariPageRoutingModule } from './manual-usuari-routing.module';

import { ManualUsuariPage } from './manual-usuari.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManualUsuariPageRoutingModule
  ],
  declarations: [ManualUsuariPage]
})
export class ManualUsuariPageModule {}
