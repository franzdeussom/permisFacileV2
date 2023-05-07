import { ToastController } from '@ionic/angular';
import { User } from './../../../services/user/user.model';
import { GenerateUserServiceService } from './generate-user-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generate-users',
  templateUrl: './generate-users.page.html',
  styleUrls: ['./generate-users.page.scss'],
})

export class GenerateUsersPage implements OnInit {
  data : User;
  userDataToGenerate: { 
                        phonenumber: string, 
                        email: string,
                      }={
                        phonenumber: '',
                        email : ''
                      }
  showData: boolean = false;
  constructor(private apiGenerateService: GenerateUserServiceService,
              private toast : ToastController
              ) { }

  ngOnInit() {
   this.data = new User();
  }

  async generateUser(){
    if(this.userDataToGenerate.email !== '' && this.userDataToGenerate.phonenumber !== ''){
            this.apiGenerateService.getDataUserGenerate(this.userDataToGenerate)
            .subscribe((resp: User)=>{
              this.data = resp;
              this.showData = true;
              console.log(resp);
              
          }, (error)=>{
            console.log('error', error.message);
          });
    }else{
        const toast  = await this.toast.create({
          message: 'Veuiller remplir tous les champs',
          position: 'top',
          duration: 3000
        });
       await toast.present()
    }
      
  }
}
