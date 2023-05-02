import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { UserRouteAccessService } from 'src/app/services/auth/user-route-access.service';
import { EntitiesPage } from './entities.page';


const routes: Routes = [
  {
    path: '',
    component: EntitiesPage,
    data: {
      authorities: ['ROLE_USER'],
    },
    canActivate: [UserRouteAccessService],
  },
   {
    path: 'question',
    loadChildren: () => import('./question/question.module').then(m => m.QuestionPageModule)
  },
   {
    path: 'reponse',
    loadChildren: () => import('./reponse/reponse.module').then(m => m.ReponsePageModule)
  },
   {
    path: 'user-device',
    loadChildren: () => import('./user-device/user-device.module').then(m => m.UserDevicePageModule)
  },
  {
    path: 'question-list',
    loadChildren: ()=> import('./question-list/question-list.module').then(m => m.QuestionListPageModule )
  },
  {
    path: 'favourite-list',
    loadChildren: ()=> import('./favourite-list/favourite-list.module').then(m => m.FavouriteListPageModule )
  },
  {
    path: 'score-stat',
    loadChildren: ()=> import('./score-stat/score-stat.module').then(m => m.ScoreStatPageModule )
  },
  {
    path: 'generate-users',
    loadChildren: ()=> import('./generate-users/generate-users.module').then(m => m.GenerateUsersPageModule )
  }
  /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
];

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, RouterModule.forChild(routes), TranslateModule],
  declarations: [EntitiesPage],
})
export class EntitiesPageModule {}
