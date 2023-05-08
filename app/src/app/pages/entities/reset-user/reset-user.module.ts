import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResetUserPageRoutingModule } from './reset-user-routing.module';

import { ResetUserPage } from './reset-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResetUserPageRoutingModule
  ],
  declarations: [ResetUserPage]
})
export class ResetUserPageModule {}
