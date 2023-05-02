import { ToastController } from '@ionic/angular';
import { ApiService } from './../../../services/api/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-pwd',
  templateUrl: './update-pwd.page.html',
  styleUrls: ['./update-pwd.page.scss'],
})
export class UpdatePwdPage implements OnInit {
  newData: {newPass: string, confirmPass: string} = {
    newPass: '',
    confirmPass : ''
  };

  constructor(private api: ApiService, 
              private toast: ToastController  
              ) { }

  ngOnInit() {
  }

  async doUpdate(){
    if(this.newData.newPass === this.newData.confirmPass){

      console.log('Do update');
      this.api.post('account/change-password', this.newData).subscribe((data)=>{
        console.log(data);
      });

    }else{
      const alertToast = await this.toast.create({
          message: 'les mots de passe sont differents',
          duration: 3000,
          position: 'top',
        });
        await alertToast.present();      
    }
  }
}
