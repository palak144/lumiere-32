import { Injectable, EventEmitter } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginUrl="login";
  checkByEmailUrl="checkByEmail";
  registerUrl = "register";
  verifyOtpUrl = "verifyOTP"
  resendOtpUrl = "resendOTP";
  forgotPassworsUrl = "forgetPassword";
  onResetpasswordUrl = "resetpassword";

  private emailIdLogIn : string;
  private emailIdSignUp : string;

  loggedInCustomerName = "Login / Signup";
  loginFlag: boolean =false;

  constructor(
    private baseService: BaseService
  ) {   }
    
  onRegisterScreen1(email:string){
    this.emailIdSignUp = email
     return this.baseService.post(this.checkByEmailUrl,{"Email":email})
  }

  onRegisterScreen2(data) {
    return this.baseService.post(this.registerUrl, data)
  }

  onVerifyOtpSignUp(otp:string){
    return this.baseService.post(this.verifyOtpUrl,{"Email":this.emailIdSignUp,"otp":otp})
  }

  onVerifyOtpLogIn(otp:string){
    return this.baseService.post(this.verifyOtpUrl,{"Email":this.emailIdLogIn,"otp":otp})
  }

  onResendOtpLogIn(){
    return this.baseService.post(this.resendOtpUrl,{"Email":this.emailIdLogIn})
  }

  onResendOtpSignUp(){
    return this.baseService.post(this.resendOtpUrl,{"Email":this.emailIdSignUp})
  }

  onForgotPassword(emailId:string){
    this.emailIdLogIn = emailId;
    return this.baseService.post(this.forgotPassworsUrl,{"Email":emailId})
  }

  onResetpassword(password:string){
    return this.baseService.post(this.onResetpasswordUrl,{"Email":this.emailIdLogIn,"password":password})
  }

  onLogin(email:string,password:string){
    
     return this.baseService.post(this.loginUrl,{"Email":email,"password":password});
  }


}


