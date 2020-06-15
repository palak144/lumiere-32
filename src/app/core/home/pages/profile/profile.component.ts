import { Component, OnInit } from '@angular/core';
import { ChangePasswordComponent } from 'src/app/shared/components/change-password/change-password.component';
import { MatDialog } from '@angular/material/dialog';
import { SavedPaymentDetailsComponent } from 'src/app/shared/components/saved-payment-details/saved-payment-details.component';
import { UserService } from 'src/app/core/services/user.service';
import { HttpResponse } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileDetails: any;
  personalDetailForm: FormGroup;
  isSubmitted : boolean= false;

  constructor(
    private dialog: MatDialog,
    private userService: UserService

  ) { }

  ngOnInit(): void {

    this.personalDetailForm = new FormGroup({
      "email": new FormControl('', [
        Validators.required,
        Validators.pattern('^[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,3}$')]),
      "country": new FormControl('', Validators.required),
      "name": new FormControl('', Validators.required),
      "lname": new FormControl('', Validators.required),
      "clinicName": new FormControl('', Validators.required),
      "mobile": new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9\+\-]{10}$')]),
      "speciality": new FormControl('', [
        Validators.required]),
      "practiceType": new FormControl('', Validators.required),
      "blockNo": new FormControl('', Validators.required),
      "floorNo": new FormControl('', Validators.required),
      "unitNo": new FormControl('', Validators.required),
      "street": new FormControl('', Validators.required),
      "building": new FormControl('', Validators.required),
      "postal": new FormControl('', [ Validators.required,
        Validators.pattern('^[0-9\+\-]{6}$')])
    });
    this.onProfileInfo()
  }

get profileControls() {
    return this.personalDetailForm.controls;
  }
  onProfileInfo() {
    this.userService.getProfileInfo().subscribe(
      (response: HttpResponse<any>) => {
        this.profileDetails = response.body.data
        
      },
      (error) => {

      }
    )
  }

  openDialog() {
    const dialogRef = this.dialog.open(ChangePasswordComponent, {
      width: '666px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDialog2() {
    const dialogRef = this.dialog.open(SavedPaymentDetailsComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
