import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultadosQuizPageRoutingModule } from './resultados-quiz-routing.module';

import { ResultadosQuizPage } from './resultados-quiz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultadosQuizPageRoutingModule
  ],
  declarations: [ResultadosQuizPage]
})
export class ResultadosQuizPageModule {}
