import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResetUserPage } from './reset-user.page';

const routes: Routes = [
  {
    path: '',
    component: ResetUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResetUserPageRoutingModule {}
