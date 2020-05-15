import { Component, OnInit  } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ForgotPasswordDialogComponent } from '../../../shared/components/forgot-password-dialog/forgot-password-dialog.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  selectedValues:string[] = [];
  submitted: boolean = false;
  dialogFlag:boolean = false;

  constructor(
    private formBuilder:FormBuilder,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
   
  this.loginForm = this.formBuilder.group({
    userId: ['', Validators.required],
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
