import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  resetForm:FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.resetForm = new FormGroup({
      
    })
  }


  onSubmit() {
    console.log('submit:::');
  }

}
