import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.scss']
})
export class VerifyOtpComponent implements OnInit {

  otp: string;
  emailId: string
  isDisabled: boolean = false;

  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onOtpChange(otp) {
    this.otp = otp;
  }

  onChangeEmail(){
    this.router.navigate(["/auth/register"])
  }
  onSubmitOTP() {
    this.authService.onVerifyOtpLogIn(this.otp).subscribe(
      data => {
        this.toastr.success(data.data)
        this.router.navigate(["/auth/reset-password"])
      },
      error => {
        this.toastr.error(error.error.message);
      })
  }

  onResendOtp() {
    document.getElementById('resendOtp').classList.add('disable')
    setTimeout(() => {
      document.getElementById('resendOtp').classList.remove('disable')
        }, 30000);
    this.authService.onResendOtpLogIn().subscribe(
      data => {
        this.toastr.success(data.data)
      },
      error => {
        this.toastr.error(error.error.message);
      })
  }
}
