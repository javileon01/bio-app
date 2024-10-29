import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebsRecomanatsPageRoutingModule } from './webs-recomanats-routing.module';

import { WebsRecomanatsPage } from './webs-recomanats.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebsRecomanatsPageRoutingModule
  ],
  declarations: [WebsRecomanatsPage]
})
export class WebsRecomanatsPageModule {}
