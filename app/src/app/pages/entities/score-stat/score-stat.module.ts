import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScoreStatPageRoutingModule } from './score-stat-routing.module';

import { ScoreStatPage } from './score-stat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScoreStatPageRoutingModule
  ],
  declarations: [ScoreStatPage]
})
export class ScoreStatPageModule {}
