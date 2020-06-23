import { Injectable, EventEmitter } from '@angular/core';
import { BaseService } from './base.service';
import { retry } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string;
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
  loginData: string;

  constructor(
    private http: HttpClient,
    private baseService: BaseService,  ) {
      this.baseUrl = this.baseService.baseUrl;

       }
    
  onRegisterScreen1(email:string){
    this.emailIdSignUp = email;
     return this.baseService.post(this.checkByEmailUrl,{"Email":email})
  }

  onRegisterScreen2(data) {
    return this.baseService.post(this.registerUrl, data)
  }

  onVerifyOtpSignUp(otp:string){
    return this.baseService.post(this.verifyOtpUrl,{"Email":this.emailIdSignUp,"otp":otp})
  }

  onVerifyOtpLogIn(otp:string){
    return this.baseService.post(this.verifyOtpUrl,{"Email":this.emailIdLogIn ,"otp":otp})
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
    this.emailIdLogIn = email;
    return this.http
      .post(this.baseUrl + 'login',{"Email":email,"password":password}, { observe: 'response' })
      .pipe(
        retry(3)
      );
  }


}


