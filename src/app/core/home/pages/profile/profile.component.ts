import { Component, OnInit } from '@angular/core';
import { ChangePasswordComponent } from 'src/app/shared/components/change-password/change-password.component';
import { MatDialog } from '@angular/material/dialog';
import { SavedPaymentDetailsComponent } from 'src/app/shared/components/saved-payment-details/saved-payment-details.component';
import { UserService } from 'src/app/core/services/user.service';
import { HttpResponse } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AddAddressComponent } from 'src/app/shared/components/add-address/add-address.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileDetails: any;
  personalDetailForm: FormGroup;
  isSubmitted : boolean= false;
  personalDetailFormDetails : any;
  profileBillingDetails: any;
  addressDetail: any;
  constructor(
    private dialog: MatDialog,
    private userService: UserService,
    private router:Router,
    private route:ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.initForm()

  }

get profileControls() {
    return this.personalDetailForm.controls;
  }

  initForm(){

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
      "streetName": new FormControl('', Validators.required),
      "building": new FormControl('', Validators.required),
      "postal": new FormControl('', [ Validators.required,
        Validators.pattern('^[0-9\+\-]{6}$')])
    });
    this.onProfileInfo()


  }
  onProfileInfo() {
    this.userService.getProfilePersonalInfo().subscribe(
      (response: HttpResponse<any>) => {
        this.profileDetails = response.body.data
        this.personalDetailForm.patchValue({
          "email": this.profileDetails.Email,
          "name": this.profileDetails.firstName,
          "lname": this.profileDetails.lastName,
          "country" : this.profileDetails.customerId,
          "clinicName": this.profileDetails.clinicName,
          "mobile": this.profileDetails.teleNumber,
          "speciality" : this.profileDetails.speciality,
          "practiceType": this.profileDetails.practiceType,
          "blockNo": this.profileDetails.houseNo,
          "floorNo": this.profileDetails.floorNo,
          "unitNo": this.profileDetails.unitNo,
          "streetName": this.profileDetails.streetName,
          "building": this.profileDetails.buildingName,
          "postal": this.profileDetails.pincode,
        })
      },
      (error) => {

      }
    )
   this.getProfileAddressDetails();

  }
  getProfileAddressDetails(){
    debugger
    this.userService.getProfileAddressDetails().subscribe(
      (response: HttpResponse<any>)=>{
        debugger
        this.addressDetail = response.body.data.result
      },
      (error)=>{
      }
    )
  }
  onSubmit() {
    this.isSubmitted = true;
    if (this.personalDetailForm.invalid) {
      return
    }
    var json = JSON.parse(localStorage.UserData);
    this.personalDetailFormDetails = {
      "Email": this.personalDetailForm.get('email').value,
      "firstName": this.personalDetailForm.get('name').value,
      "lastName": this.personalDetailForm.get('lname').value,
      "clinicName": this.personalDetailForm.get('clinicName').value,
      "countryCode": '+91',
      "houseNo": this.personalDetailForm.get('blockNo').value,
      "floorNo": this.personalDetailForm.get('floorNo').value,
      "unitNo": this.personalDetailForm.get('unitNo').value,
      "streetName": this.personalDetailForm.get('streetName').value,
      "buildingName": this.personalDetailForm.get('building').value,
      "practiceType": this.personalDetailForm.get('practiceType').value,
      "pincode": this.personalDetailForm.get('postal').value,
      "mobileNumber": this.personalDetailForm.get('mobile').value,
      "customerId": json.body.data.customerId
    }

this.userService.postProfilePersonalInfo(this.personalDetailFormDetails).subscribe(

  (success)=>{
 
  },
  (error)=>{
    
  }
)

  }

  editAddress(id:number){
    debugger
    this.router.navigate(['../',id,'edit'],{relativeTo : this.route})

  }
  removeAddress(id:number){
    this.userService.onDeleteAddress(id).subscribe(

      (success)=>{
        this.getProfileAddressDetails();
      },
      (error)=>{
        
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
  openDialog3() {
    const dialogRef = this.dialog.open(AddAddressComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
