import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  base_url:string;
  constructor(
    private baseService: BaseService
  ) {
    this.base_url = this.baseService.baseUrl;
   }

   

}
