import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScoreStatPage } from './score-stat.page';

const routes: Routes = [
  {
    path: '',
    component: ScoreStatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScoreStatPageRoutingModule {}
