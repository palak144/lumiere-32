import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../../services/utility.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
interface Title {
  name: string;
  code: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  title:Title[];
  titleListFromAPI: string[];
  isSubmitted:boolean = false;

  registerFormFlag:boolean = false;

  registerForm:FormGroup;
  emailForm:FormGroup;

  constructor(
    private utilityService: UtilityService
  ) { }

  ngOnInit(): void {

    
    this.registerForm = new FormGroup({
      Email: new FormControl('',[
        Validators.required,
        Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
      ]),
      
    })

    this.emailForm = new FormGroup({
      email: new FormControl('',[
        Validators.required,
        Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
      ])
    })

    this.titleListFromAPI = ['Mr.', 'Mrs.'];
    this.title = this.utilityService.arrayOfStringsToArrayOfObjects(this.titleListFromAPI);
  }

  registerFormData() {
    this.registerFormFlag = true;
  }

  onSubmit() {
    this.isSubmitted = true;
    if(this.emailForm.valid) {
      this.registerFormFlag = true;
    }
  }

  get emailControls() {
    return this.emailForm.controls;
  }

}
