import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent implements OnInit {

  verifyForm:FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.verifyForm = new FormGroup({

    })
  }


  numberOnly(event): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && charCode !== 43 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    const element = event.srcElement.nextElementSibling; // get the sibling element

    if (element == null) {
      return;
    } else {
      element.focus();
    } // focus if not null
    return true;
  }

}
