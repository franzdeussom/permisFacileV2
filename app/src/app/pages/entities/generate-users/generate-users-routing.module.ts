import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenerateUsersPage } from './generate-users.page';

const routes: Routes = [
  {
    path: '',
    component: GenerateUsersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenerateUsersPageRoutingModule {}
