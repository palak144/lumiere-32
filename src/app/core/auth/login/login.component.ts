import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { ForgotPasswordDialogComponent } from '../../../shared/components/forgot-password-dialog/forgot-password-dialog.component';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
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
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private dialog: MatDialog,
    private toastr: ToastrService,
    public router:Router,
  ) { }

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
      console.log(`Dialog result: ${result}`);
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
          this.loading = false;
          this.loginResponseObj = response;
          this.authService.loginFlag = true;
          
          localStorage.setItem('token', response.headers.get('authtoken'));
           this.authService.loggedInCustomerName = response.body.data.firstName
          this.toastr.success("Login Successful")
          localStorage.setItem('UserData', JSON.stringify(response));
          this.router.navigate([""])
        },
        error => {
          this.loading = false;
         if(error.error.message == "Email not verify"){
          this.router.navigate(["/auth/verify-otp"])
          this.toastr.info("Verify your email");
          }
          else{
            this.toastr.error(error.error.message);
          }
          ;
        });
    } else {
      this.loading = false;
      this.toastr.error("Check your Internet Connection")
    }
  }
}
