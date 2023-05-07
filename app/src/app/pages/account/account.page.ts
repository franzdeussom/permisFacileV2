import { User } from './../../services/user/user.model';
import { Component } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import { NavController } from '@ionic/angular';
import { CheckAccountTypeService } from '../home/check-account-type.service';

@Component({
  selector: 'app-account',
  templateUrl: 'account.page.html',
  styleUrls: ['account.page.scss'],
})
export class AccountPage {
  dataCurrentUser : User = new User();
  constructor(public navController: NavController,private typeAccount : CheckAccountTypeService, private loginService: LoginService){
      this.dataCurrentUser = this.typeAccount.dataUser;
  }
  
  logout() {
    this.typeAccount.isAdministrator = false;
    this.loginService.logout();
    this.goBackToHomePage();
  }

  private goBackToHomePage(): void {
    this.navController.navigateRoot('login');
  }

  public goToUpdataPassPage(){
    this.navController.navigateForward('update-pwd');
  }
}
