import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-forgot-password-dialog',
  templateUrl: './forgot-password-dialog.component.html',
  styleUrls: ['./forgot-password-dialog.component.scss']
})
export class ForgotPasswordDialogComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean;
  public loading = false;


  constructor(
    public formBuilder : FormBuilder,
    public authService:AuthService,
    public toastr : ToastrService,
    private router:Router,
    public dialog: MatDialog,

  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userId: new FormControl('', [
        Validators.required,
        Validators.pattern('^[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,3}$')]),
  
    });
  }
  onSubmit(){
    this.submitted = true;
    this.loading = true;

    if (this.loginForm.invalid) {
      this.loading = false;

      return;
    }
    this.authService.onForgotPassword(this.loginForm.value.userId).subscribe(
      data => {   
        this.loading = false;
        
        this.toastr.success("OTP is successfully sent")
        this.dialog.closeAll()
        this.router.navigate(["/auth/verify-otp"])
      },
      error => {
        this.loading = false;
        this.toastr.error(error.error.message);
        ;
      });
  }
  
  get f(){
    return this.loginForm.controls;
  }
}
