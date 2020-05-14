import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  // On production


// public base_url: string = 'http://localhost:3000/api/v1/customer/';

  // On Localhost
  public base_url: string = 'http://18.141.13.208/api/v1/customer/';

  // public base_url: string = 'http://localhost:8641/api/';
  constructor(private http: HttpClient) { }
}

