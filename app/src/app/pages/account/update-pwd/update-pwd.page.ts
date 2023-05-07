import { CheckAccountTypeService } from './../../home/check-account-type.service';
import { ToastController } from '@ionic/angular';
import { ApiService } from './../../../services/api/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-pwd',
  templateUrl: './update-pwd.page.html',
  styleUrls: ['./update-pwd.page.scss'],
})
export class UpdatePwdPage implements OnInit {
  confirmPass: string = '';
  newData: {currentPassword: string, newPassword: string} = {
    currentPassword: '',

    newPassword : '',
  };

  constructor(private api: ApiService, 
              private toast: ToastController,
              private checkUser: CheckAccountTypeService
              ) { }

  ngOnInit() {
  }

  async doUpdate(){
    if(this.confirmPass === this.newData.newPassword){
      if(this.newData.currentPassword === this.checkUser.password){
        this.api.post('account/change-password', this.newData).subscribe(()=>{
          this.makeToast('Mot de passe change avec succes');
          this.checkUser.password = this.newData.newPassword;
        });
      }else{
          this.makeToast('Mot de passe du compte errone');
      }
    }else{
      this.makeToast('les mots de passe sont differents');
    }
  }

  async makeToast(msg: string){
    const alertToast = await this.toast.create({
      message: msg,
      duration: 3000,
      position: 'top',
    });
    await alertToast.present();    
  }
}
