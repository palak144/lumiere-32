import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../../services/utility.service';
import { FormGroup, FormControl, Validators , FormBuilder} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MustMatch } from '../../../_helpers/must-watch.validator';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  selectedValues:string[] = [];
  selectedValues2:string[] = [];
  titles:string[];
  titleListFromAPI: string[];
  isSubmittedEmailForm:boolean = false;
  isSubmittedRegisterForm:boolean = false;
  public loading = false;
  registerForm:FormGroup;
  emailForm:FormGroup;
  registerFormDetails: {};
  countrycodeListFromAPI: string[];
  codes: string[];
  hide = true;
  emailFormDetails: {};
  otp: string;
  registerFormFlag:boolean = false;
otpFlag:boolean=false;
emailFormFlag:boolean=true;
  registerSecreen1Data: any;
  isDisabled: boolean = false;

  constructor(
    private utilityService: UtilityService,
    private formBuilder:FormBuilder,
    private router:Router,
    private toastr:ToastrService,
    private authService:AuthService
  ) { }

  ngOnInit(): void {

    
    this.registerForm = this.formBuilder.group({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,3}$')]),
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      clinicName: ['', Validators.required],
      code:['',Validators.required],
      title:['',Validators.required],
      contactNo: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]{10}$')]),   
       practiceType: ['', Validators.required],
      speciality: ['', Validators.required],
      password: ['', [Validators.required, 
        Validators.minLength(8),
        Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'),
      Validators.maxLength(20)]],
      rePassword: ['', Validators.required],
      recaptcha: ['', ]
    }, {
      validator: MustMatch('password', 'rePassword')
  
    });
    this.emailForm = this.formBuilder.group({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,3}$')])
  
    });

    this.titles = ['Mr.', 'Miss.','Mrs'];
    this.codes = ['+91', '+92'];
  }

  get emailControls() {
    return this.emailForm.controls;
  }

  get signUpControls() {
    return this.registerForm.controls;
  }


  onSubmitEmailForm() {
    this.loading = true;
    this.isSubmittedEmailForm = true;
    if(this.emailForm.invalid) {
      this.loading = false;
      this.registerFormFlag = false;
      return
    }
    this.authService.onRegisterScreen1(this.emailForm.get('email').value).subscribe(
      data => {      
        debugger
        this.registerSecreen1Data = data.data        
        this.loading = false;
        this.emailFormFlag = false;
        this.registerFormFlag = true;
        this.isSubmittedEmailForm = false;
        this.emailForm.reset();

      },
      error => {
        debugger
        this.registerFormFlag = false;
        this.loading = false;
        this.toastr.error(error.error.message);
      });
  }
  onSubmitRegisterForm(){
    this.loading = true;
    this.isSubmittedRegisterForm = true;
    if(this.registerForm.invalid){
      this.loading = false;
      return
    }
    this.registerFormDetails = {
      "Email": this.registerForm.get('email').value,
      "password": this.registerForm.get('password').value,
      "firstName": this.registerForm.get('fname').value,
      "lastName": this.registerForm.get('lname').value,
      "title":this.registerForm.get('title').value,
      "clinicName": this.registerForm.get('clinicName').value,
      "countryCode": this.registerForm.get('code').value,
      "teleNumber": this.registerForm.get('contactNo').value,
      "practiceType": this.registerForm.get('practiceType').value,
      "speciality": this.registerForm.get('speciality').value
     }
     
    this.authService.onRegisterScreen2(this.registerFormDetails).subscribe(
      data => {                
        this.loading = false;
        this.toastr.success('Registration Successful');
        this.isSubmittedRegisterForm = false;
        this.registerForm.reset();
        this.emailFormFlag = false;
        this.registerFormFlag = false;
        this.otpFlag=true;   
         },
      error => {
        this.otpFlag=false;   
        this.loading = false;
        this.toastr.error(error.error.message);
        ;
      });
  }

  onOtpChange(otp) {
    this.otp = otp;
  }

  onSubmitOTP(){
    debugger
this.authService.onVerifyOTP(this.registerSecreen1Data,this.otp).subscribe(
  data => {                
    this.toastr.success(data.success.message)
  },
  error => {
    this.toastr.error(error.error.message);
    ;
  } 
)
  }
  handleSuccess(data) {
    console.log(data);
  }
  onResendOtp(){
    debugger
    this.isDisabled = true;
    setTimeout (() =>{
      this.isDisabled = false;
    },30000);
    this.authService.onResendOtp(this.registerSecreen1Data).subscribe(
      data => {   
        debugger             
        this.toastr.success(data.success.message)
      },
      error => {
        debugger
        this.toastr.error(error.error.message);
        ;
      }     )
}
}
