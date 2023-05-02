import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatePwdPageRoutingModule } from './update-pwd-routing.module';

import { UpdatePwdPage } from './update-pwd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatePwdPageRoutingModule
  ],
  declarations: [UpdatePwdPage]
})
export class UpdatePwdPageModule {}
