import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { ForgotPasswordDialogComponent } from '../../../shared/components/forgot-password-dialog/forgot-password-dialog.component';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import * as CryptoJS from 'crypto-js';
import { EncrDecrServiceService } from '../../services/encr-decr-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loading = false;
  loginForm: FormGroup;
  selectedValues: string[] = [];
  submitted: boolean = false;
  dialogFlag: boolean = false;
  loginResponseObj: any;
  public encrypted: string;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private dialog: MatDialog,
    private toastr: ToastrService,
    public router:Router,
    private EncrDecr: EncrDecrServiceService
  ) {
    debugger
    this.EncrDecr.myMethodToStoreToken(this.encrypted);}

  ngOnInit(): void {

    
    this.loginForm = this.formBuilder.group({
      userId: new FormControl('', [
        Validators.required,
        Validators.pattern('^[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,3}$')]),
      password: ['', Validators.required],

    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(ForgotPasswordDialogComponent, {
      width: '666px'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  onSubmit() {
    this.loading = true;
    this.submitted = true;
    if (this.loginForm.invalid) {
      this.loading = false;
      return;
    }
    this.authenticateLogIn();
  }

  get f() {
    return this.loginForm.controls;
  }

  authenticateLogIn() {
    if (navigator.onLine) {
      this.authService.onLogin(this.loginForm.value.userId, this.loginForm.value.password).subscribe(
        (response: HttpResponse<any>) => {
          debugger
          this.loading = false;
          this.loginResponseObj = response;
          this.authService.loginFlag = true;
          
           this.authService.loggedInCustomerName = response.body.data.firstName
          this.toastr.success("Login Successful")
       //   encypted token logic
          // console.log(response.headers.get('authtoken'))
          //   var en= CryptoJS.AES.encrypt(response.headers.get('authtoken'),'secret key palak!@123').toString();
          // console.log(en)
          // debugger 
          this.encrypted = this.EncrDecr.set('123456$#@$^@1ERF', response.headers.get('authtoken'));
          console.log('Encrypted :' + this.encrypted);

          localStorage.setItem('token', response.headers.get('authtoken'));
          localStorage.setItem('UserData', JSON.stringify(response));
          this.router.navigate([""])
        },
        error => {
          debugger
          this.loading = false;
         if(error.error.message == "Email not verify"){
          this.router.navigate(["/auth/verify-otp"])
          this.toastr.info("Verify your email");
          }
          else{
            debugger
            this.toastr.error(error.error.message);
          };
        });
    } else {
      this.loading = false;
      this.toastr.error("Check your Internet Connection")
    }
  }
}
