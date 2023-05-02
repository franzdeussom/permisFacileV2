import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatePwdPage } from './update-pwd.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatePwdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatePwdPageRoutingModule {}
