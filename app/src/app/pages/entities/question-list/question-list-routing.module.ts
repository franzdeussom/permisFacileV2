import { FavouriteListPage } from './../favourite-list/favourite-list.page';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionListPage } from './question-list.page';

const routes: Routes = [
  {
    path: '',
    component: QuestionListPage
  },
  {
    path : 'question-details', component:  QuestionListPage
  },
  {
    path: 'favourite-list', component: FavouriteListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionListPageRoutingModule {}
