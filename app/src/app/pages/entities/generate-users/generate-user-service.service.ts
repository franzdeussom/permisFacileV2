import { User } from './../../../services/user/user.model';
import { Observable } from 'rxjs';
import { ApiService } from './../../../services/api/api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenerateUserServiceService {

  constructor(private api: ApiService) {   }

   getDataUserGenerate(): Observable<any>{
    return this.api.post('admin/users/generate', '');
  }

}
