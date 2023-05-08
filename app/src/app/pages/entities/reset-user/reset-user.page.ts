import { ApiService } from './../../../services/api/api.service';
import { AccountService } from './../../../services/auth/account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-user',
  templateUrl: './reset-user.page.html',
  styleUrls: ['./reset-user.page.scss'],
})
export class ResetUserPage implements OnInit {
  userName: string = '';

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  doReset(){
    if(this.userName !== ''){
      this.api.post('users/resetdevice', this.userName).subscribe((resp)=>{
        console.log('reset', resp);
        this.userName = '';
      });
    }
  }
}
