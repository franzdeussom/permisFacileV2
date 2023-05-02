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

import { UserDevicePage } from './user-device';
import { UserDeviceUpdatePage } from './user-device-update';
import { UserDevice, UserDeviceService, UserDeviceDetailPage } from '.';

@Injectable({ providedIn: 'root' })
export class UserDeviceResolve implements Resolve<UserDevice> {
  constructor(private service: UserDeviceService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserDevice> {
    const id = route.params.id ? route.params.id : null;
    if (id) {
      return this.service.find(id).pipe(
        filter((response: HttpResponse<UserDevice>) => response.ok),
        map((userDevice: HttpResponse<UserDevice>) => userDevice.body)
      );
    }
    return of(new UserDevice());
  }
}

const routes: Routes = [
    {
      path: '',
      component: UserDevicePage,
      data: {
        authorities: ['ROLE_USER']
      },
      canActivate: [UserRouteAccessService]
    },
    {
      path: 'new',
      component: UserDeviceUpdatePage,
      resolve: {
        data: UserDeviceResolve
      },
      data: {
        authorities: ['ROLE_USER']
      },
      canActivate: [UserRouteAccessService]
    },
    {
      path: ':id/view',
      component: UserDeviceDetailPage,
      resolve: {
        data: UserDeviceResolve
      },
      data: {
        authorities: ['ROLE_USER']
      },
      canActivate: [UserRouteAccessService]
    },
    {
      path: ':id/edit',
      component: UserDeviceUpdatePage,
      resolve: {
        data: UserDeviceResolve
      },
      data: {
        authorities: ['ROLE_USER']
      },
      canActivate: [UserRouteAccessService]
    }
  ];

@NgModule({
    declarations: [
        UserDevicePage,
        UserDeviceUpdatePage,
        UserDeviceDetailPage
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
export class UserDevicePageModule {
}
