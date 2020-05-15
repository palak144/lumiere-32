import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedInUserName: string;
  loginUrl="login";
  checkByEmailUrl="checkByEmail";
  registerUrl = "register";
  verifyOtpUrl = "verifyOTP"
  resendOtpUrl = "resendOTP";
  constructor(
    private baseService: BaseService
  ) {   }
    
  onRegisterScreen1(email:string){
     return this.baseService.post(this.checkByEmailUrl,{"Email":email})
  }
  onRegisterScreen2(data) {
    return this.baseService.post(this.registerUrl, data)
}
  onVerifyOTP(email:string,otp:string){
    debugger
    return this.baseService.post(this.verifyOtpUrl,{"Email":email,"otp":otp})
  }
  
  onResendOtp(email:string){
    return this.baseService.post(this.resendOtpUrl,{"Email":email})

  }
  onLogin(email:string,password:string)
    {
      debugger
      this.loggedInUserName = email;
     return this.baseService.post(this.loginUrl,{"Email":email,"password":password});
    }
   }


