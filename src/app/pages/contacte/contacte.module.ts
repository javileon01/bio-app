import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactePageRoutingModule } from './contacte-routing.module';

import { ContactePage } from './contacte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactePageRoutingModule
  ],
  declarations: [ContactePage]
})
export class ContactePageModule {}
