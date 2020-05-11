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

  registerForm:FormGroup;

  constructor(
    private utilityService: UtilityService
  ) { }

  ngOnInit(): void {

    this.registerForm = new FormGroup({
      title: new FormControl(null,[Validators.required])
    })

    this.titleListFromAPI = ['Mr.', 'Mrs.'];
    this.title = this.utilityService.arrayOfStringsToArrayOfObjects(this.titleListFromAPI);
  }

}
