import { Component, OnInit  } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  selectedValues:string[] = [];
  submitted: boolean = false;
  constructor(
    private formBuilder:FormBuilder
  ) { }

  ngOnInit(): void {
   
  this.loginForm = this.formBuilder.group({
    userId: ['', Validators.required],
    password: ['', Validators.required],

  });
  }

onSubmit(){
  
  this.submitted = true;
  
  if (this.loginForm.invalid) {
    return;
  }
  console.log(this.loginForm.value)
}

get f(){
  return this.loginForm.controls;
}

}
