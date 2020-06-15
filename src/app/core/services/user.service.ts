import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loggedInCustomer: string;
  baseUrl: string;

  constructor(       
    private http: HttpClient,
    private baseService: BaseService,
      ) {
        this.baseUrl = this.baseService.baseUrl;

   }

  getProfileInfo(){
    
    var json = JSON.parse(localStorage.UserData);
    this.loggedInCustomer = json.body.data.customerId
    return this.http
      .get(this.baseUrl + 'detail/'+this.loggedInCustomer, { observe: 'response' })
      .pipe(
        retry(3)
      );
  }
  onPasswordChange(data){
    
    return this.baseService.post('changePassword', data )
  }
}
