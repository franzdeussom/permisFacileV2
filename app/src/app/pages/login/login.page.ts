import { CheckAccountTypeService } from './../home/check-account-type.service';
import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { LoginService } from '../../services/login/login.service';
import { Device } from '@ionic-native/device/ngx/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  // The account fields for the login form.
  account: { username: string; password: string; rememberMe: boolean } = {
    username: '',
    password: '',
    rememberMe: false,
  };

  // Our translated text strings
  private loginErrorString: string;
  private deviceId: string;

  constructor(
    public translateService: TranslateService,
    public loginService: LoginService,
    public toastController: ToastController,
    public navController: NavController,
    public checkUser: CheckAccountTypeService,
    public device: Device
  ) {}

  ngOnInit() {
    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    });
    this.getDeviceId();
  }

  getDeviceId() {
    this.deviceId = this.device.uuid;
    console.log('Device UUID is: ' + this.deviceId);
  }

  doLogin() {
    this.loginService.login(this.account).then(
      () => {
        this.checkUser.password = this.account.password;
        this.navController.navigateRoot('/tabs');
      },
      async (err) => {
        // Unable to log in
        this.account.password = '';
        const toast = await this.toastController.create({
          message: this.loginErrorString,
          duration: 3000,
          position: 'top',
        });
        toast.present();
      }
    );
  }
  goToSignup(){
    this.navController.navigateForward('signup');
  }
}
