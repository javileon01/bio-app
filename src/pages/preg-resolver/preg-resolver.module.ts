import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PregResolverPageRoutingModule } from './preg-resolver-routing.module';

import { PregResolverPage } from './preg-resolver.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PregResolverPageRoutingModule
  ],
  declarations: [PregResolverPage]
})
export class PregResolverPageModule {}
