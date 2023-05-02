import { User } from './../../services/user/user.model';
import { Injectable } from '@angular/core';
import { ApiService } from '../../services/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class CheckAccountTypeService {
  public isAdministrator: boolean;
  public dataUser : any;
  constructor( private api: ApiService) { }

  isAdmin(){
    this.api.get('account').subscribe((resp: any)=>{
      if(resp.firstName === 'Administrator'){
        this.isAdministrator = true;
      }
      this.dataUser = resp;
    });
  }
}
