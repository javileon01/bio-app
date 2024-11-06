import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GlossariDefPageRoutingModule } from './glossari-def-routing.module';

import { GlossariDefPage } from './glossari-def.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GlossariDefPageRoutingModule
  ],
  declarations: [GlossariDefPage]
})
export class GlossariDefPageModule {}
