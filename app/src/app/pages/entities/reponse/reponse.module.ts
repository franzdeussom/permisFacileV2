import { NgModule, Injectable } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserRouteAccessService } from '../../../services/auth/user-route-access.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';

import { ReponsePage } from './reponse';
import { ReponseUpdatePage } from './reponse-update';
import { Reponse, ReponseService, ReponseDetailPage } from '.';

@Injectable({ providedIn: 'root' })
export class ReponseResolve implements Resolve<Reponse> {
  constructor(private service: ReponseService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Reponse> {
    const id = route.params.id ? route.params.id : null;
    if (id) {
      return this.service.find(id).pipe(
        filter((response: HttpResponse<Reponse>) => response.ok),
        map((reponse: HttpResponse<Reponse>) => reponse.body)
      );
    }
    return of(new Reponse());
  }
}

const routes: Routes = [
    {
      path: '',
      component: ReponsePage,
      data: {
        authorities: ['ROLE_USER']
      },
      canActivate: [UserRouteAccessService]
    },
    {
      path: 'new',
      component: ReponseUpdatePage,
      resolve: {
        data: ReponseResolve
      },
      data: {
        authorities: ['ROLE_USER']
      },
      canActivate: [UserRouteAccessService]
    },
    {
      path: ':id/view',
      component: ReponseDetailPage,
      resolve: {
        data: ReponseResolve
      },
      data: {
        authorities: ['ROLE_USER']
      },
      canActivate: [UserRouteAccessService]
    },
    {
      path: ':id/edit',
      component: ReponseUpdatePage,
      resolve: {
        data: ReponseResolve
      },
      data: {
        authorities: ['ROLE_USER']
      },
      canActivate: [UserRouteAccessService]
    }
  ];

@NgModule({
    declarations: [
        ReponsePage,
        ReponseUpdatePage,
        ReponseDetailPage
    ],
    imports: [
        IonicModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        TranslateModule,
        RouterModule.forChild(routes)
    ]
})
export class ReponsePageModule {
}
