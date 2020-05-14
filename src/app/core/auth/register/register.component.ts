import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../../services/utility.service';
import { FormGroup, FormControl, Validators , FormBuilder} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MustMatch } from '../../../_helpers/must-watch.validator';
import { Router } from '@angular/router';
import { RegisterService } from '../../services/registerService';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  selectedValues:string[] = [];
  selectedValues2:string[] = [];
  titles:any[];
  titleListFromAPI: string[];
  isSubmittedEmailForm:boolean = false;
  isSubmittedRegisterForm:boolean = false;
  public loading = false;
  registerFormFlag:boolean = false;
  registerForm:FormGroup;
  emailForm:FormGroup;
  registerFormDetails: any;
  countrycodeListFromAPI: string[];
  codes: any[];
  hide = true;


  constructor(
    private utilityService: UtilityService,
    private formBuilder:FormBuilder,
    private router:Router,
    private registerService:RegisterService,
    private toastr:ToastrService
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

  registerFormData() {
    this.registerFormFlag = true;
  }

  onSubmitEmailForm() {
    this.isSubmittedEmailForm = true;
    if(this.emailForm.valid) {
      this.registerFormFlag = true;
    }
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
     
    this.registerService.onRegister(this.registerFormDetails).subscribe(
      data => {                
        this.loading = false;
        this.toastr.success('Registration Successful');
        this.isSubmittedRegisterForm = false;
        this.registerForm.reset();
        this.router.navigate(['/auth/verify-email']);
      },
      error => {
        this.loading = false;
        this.toastr.error(error.error.message);
        ;
      });
  }


}
