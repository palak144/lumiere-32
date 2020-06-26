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

  getProfilePersonalInfo(){
    
    var json = JSON.parse(localStorage.UserData);
    this.loggedInCustomer = json.body.data.customerId
    return this.http
      .get(this.baseUrl + 'detail/'+this.loggedInCustomer, { observe: 'response' })
      .pipe(
        retry(3)
      );
  }

  postProfilePersonalInfo(data){
    return this.http
      .put(this.baseUrl + 'update', data,{ observe: 'response' })
      .pipe(
        retry(3)
      );
  }

  getProfileAddressDetails(){
    return this.http
      .get(this.baseUrl + 'address', { observe: 'response' })
      .pipe(
        retry(3)
      );
  }
  onAddressAdd(data){
    return this.http
      .post(this.baseUrl + 'address',data, { observe: 'response' })
      .pipe(
        retry(3)
      );
  }
  onUpdateAdd(data){
    return this.http
    .post(this.baseUrl + 'address/', data,{ observe: 'response' })
    .pipe(
      retry(3)
    );
  }
  onUpdateAddDefault(data, id){
    return this.http
    .put(this.baseUrl + 'address/' + id, data[0],{ observe: 'response' })
    .pipe(
      retry(3)
    );
  }
  getProfileAddressAdd(){
    return this.http
      .get(this.baseUrl + 'address', { observe: 'response' })
      .pipe(
        retry(3)
      );
  }
  onDeleteAddress(id:number){
    return this.http
    .delete(this.baseUrl + 'address/' + id,{ observe: 'response' })
    .pipe(
      retry(3)
    );
  }
  onPasswordChange(data){
    
    return this.baseService.post('changePassword', data )
  }

}
