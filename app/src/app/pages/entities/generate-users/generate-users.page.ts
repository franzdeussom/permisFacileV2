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
  constructor(private apiGenerateService: GenerateUserServiceService) { }

  ngOnInit() {
   this.data = new User();
  }

  generateUser(){
   
      this.apiGenerateService.getDataUserGenerate().subscribe((resp: User)=>{
        this.data = resp;
        console.log(this.data);
    }, (error)=>{
      console.log('error', error.message);
    });
  
  }
}
