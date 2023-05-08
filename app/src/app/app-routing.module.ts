import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/welcome/welcome.module').then((m) => m.WelcomePageModule) },
  { path: 'tabs', loadChildren: () => import('./pages/tabs/tabs.module').then((m) => m.TabsPageModule) },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then((m) => m.LoginPageModule) },
  { path: 'signup', loadChildren: () => import('./pages/signup/signup.module').then((m) => m.SignupPageModule) },
  { path: 'accessdenied', redirectTo: '', pathMatch: 'full' },
  {
    path: 'question-details',
    loadChildren: () => import('./pages/entities/question-details/question-details.module').then( m => m.QuestionDetailsPageModule)
  },
  {
    path: 'favourite-list',
    loadChildren: () => import('./pages/entities/favourite-list/favourite-list.module').then( m => m.FavouriteListPageModule)
  },
  {
    path: 'score-stat',
    loadChildren: () => import('./pages/entities/score-stat/score-stat.module').then( m => m.ScoreStatPageModule)
  },
  {
    path: 'generate-users',
    loadChildren: () => import('./pages/entities/generate-users/generate-users.module').then( m => m.GenerateUsersPageModule)
  },
  {
    path: 'update-pwd',
    loadChildren: () => import('./pages/account/update-pwd/update-pwd.module').then( m => m.UpdatePwdPageModule)
  },
  {
    path: 'reset-user',
    loadChildren: () => import('./pages/entities/reset-user/reset-user.module').then( m => m.ResetUserPageModule)
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
