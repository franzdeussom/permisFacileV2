import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenerateUsersPageRoutingModule } from './generate-users-routing.module';

import { GenerateUsersPage } from './generate-users.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenerateUsersPageRoutingModule
  ],
  declarations: [GenerateUsersPage]
})
export class GenerateUsersPageModule {}
