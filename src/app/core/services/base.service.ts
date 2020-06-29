import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  // On production


// public base_url: string = 'http://localhost:3000/api/v1/customer/';

  // On Localhost
  // public base_url: string = '/api/';
  public baseUrl: string = 'http://18.141.13.208/api/v1/customer/';
  public baseUrlCountry: string = 'http://18.141.13.208/api/v1/web/';


  // public base_url: string = 'http://localhost:8641/api/';

  constructor(private httpClient : HttpClient ) {}
  
  //Api Calls
  get(parameters:string): Observable<any>{ 
    return this.httpClient.get(this.baseUrl+parameters);  
 }

  post (parameters:string,data:any): Observable<any> {
    return this.httpClient.post(this.baseUrl+parameters,data);
  }
 
  put (parameters:string,id:any, data:any): Observable<any> {
    return this.httpClient.put(this.baseUrl+parameters + id, data)
  }
  
  delete (parameters:string,id:any): Observable<any> {
    return this.httpClient.delete<any>( this.baseUrl+parameters + id);
  }
  
}

