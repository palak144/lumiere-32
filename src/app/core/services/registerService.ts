import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})

export class RegisterService{
    registerUrl = "register";

    constructor(
        private baseService: BaseService
      ){}

    onRegister(data) {
              return this.baseService.post(this.registerUrl, data)
      }
}