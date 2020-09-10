import { Component, OnInit } from '@angular/core';
import { ChangePasswordComponent } from 'src/app/shared/components/change-password/change-password.component';
import { MatDialog } from '@angular/material/dialog';
import { SavedPaymentDetailsComponent } from 'src/app/shared/components/saved-payment-details/saved-payment-details.component';
import { UserService } from 'src/app/core/services/user.service';
import { HttpResponse } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AddAddressComponent } from 'src/app/shared/components/add-address/add-address.component';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth.service';
declare var $: any;
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  
  practises: string[];
  postal:any;
  public toggleButton: boolean = true;
  profileDetails: any;
  personalDetailForm: FormGroup;
  isSubmitted : boolean= false;
  personalDetailFormDetails : any;
  profileBillingDetails: any;
  addressDetail: any;
  default: boolean = true;
  defaultAddressDetail: any;
  public loading = false;
  codes:any= [];
  countries:any= [];
  selected_countryCode : any;
  selected_country : any;
  countryValue: any;
  selected_speciality: any;
  dataLoaded : boolean = true;
  specialities: any = [];
  pincode: { countryname: string; pincode: number; mobile: number; }[];
  errorMessage: string;
  errorMessages:string;
ButtonDisbaled:boolean =true;
  postalcode: any;
  constructor(
    private dialog: MatDialog,
    private userService: UserService,
    private router:Router,
    private route:ActivatedRoute,
    private toastr: ToastrService,
    private authService: AuthService
  ) { this.ngOnInit()}

  ngOnInit(): void {
    this.pincode = [
      {'countryname':'usa',
      'pincode':5,
      'mobile':+41
    },
    {"countryname":"malaysia"
    ,"pincode":5,
    "mobile":+41}
          ]

    this.getSpecialities();
    this.getProfileAddressDetails();
    this.authService.getCountry().subscribe(
      (response: HttpResponse<any>)=>{
        if (response.body.data != null) {
        response.body.data.forEach(element => {
          this.codes.push({
            label: element.phoneCode,
            value: element.phoneCode
          });
          this.countries.push({
            label: element.country,
            value: element.id
          });
        });
        
      }
        
      },
      (error)=>{
        this.loading = false

      }
    )
    this.selected_country = [];
    this.selected_countryCode ="";
    this.selected_speciality = "";
    this.initForm()

  }
  getSpecialities(){

    this.authService.getSpeciality().subscribe(
      (response: HttpResponse<any>)=>{
        if (response.body.data.result != null) {
          debugger

        response.body.data.result.forEach(element => {
          this.specialities.push({
            label: element.specialityName,
            value: element.specialityName
          });
    
        });
      }
        return this.specialities
        
      },
      (error)=>{
        
      }
    )
  }
  enable(){
    
    this.toggleButton = false
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
        Validators.pattern('^[0-9\+\-]{5,15}$')]),
      "speciality": new FormControl('', [
        Validators.required]),
      "practiceType": new FormControl('', Validators.required),
      "blockNo": new FormControl('', Validators.required),
      "floorNo": new FormControl('', Validators.required),
      "code":  new FormControl('', Validators.required),
      "unitNo": new FormControl('', Validators.required),
      "streetName": new FormControl('', Validators.required),
      "building": new FormControl('', Validators.required),
      "postal": new FormControl('', [ Validators.required,
        Validators.pattern('^[0-9\+\-]{6}$')])
    });
    this.onProfileInfo()

    this.practises = ['Medical', 'Dental', 'Other'];

  }
  onProfileInfo() {
    
    this.userService.getProfilePersonalInfo().subscribe(
      (response: HttpResponse<any>) => {
        debugger
        this.profileDetails = response.body.data
        this.personalDetailForm.patchValue({
          "email": this.profileDetails.Email,
          "name": this.profileDetails.firstName,
          "lname": this.profileDetails.lastName,
          "clinicName": this.profileDetails.clinicName,
          // "code": parseInt(this.profileDetails.countryCode),
          "mobile": this.profileDetails.mobileNumber,
          //"speciality" : this.profileDetails.speciality,
          "practiceType": this.profileDetails.practiceType,
          "blockNo": this.profileDetails.houseNo,
          "floorNo": this.profileDetails.floorNo,
          "unitNo": this.profileDetails.unitNo,
          "streetName": this.profileDetails.streetName,
          "building": this.profileDetails.buildingName,
          "postal": this.profileDetails.pincode,
        })
        
        if(this.profileDetails.country != null){
         this.selected_country = this.profileDetails.country.id
        }
         this.selected_countryCode = parseInt(this.profileDetails.countryCode)
         debugger
         this.selected_speciality = this.profileDetails.speciality


        
      },
      (error) => {
        this.loading = false

      }
    )

  }
  
  getProfileAddressDetails(){
    
    this.loading = true;
    this.userService.getProfileAddressDetails().subscribe(
      (response: HttpResponse<any>)=>{
        
        this.loading = false;
        this.addressDetail = response.body.data.result
      },
      (error)=>{
        this.loading = false
      }
    )
  }
  setDefault(id){
document.getElementById('default').classList.add('blue')
this.default=false;
this.defaultAddressDetail = this.addressDetail.filter(item => item.id === id)
this.userService.onUpdateAddDefault(this.defaultAddressDetail,id).subscribe(
  (success)=>{
    this.getProfileAddressDetails();
  },
  (error)=>{
    this.loading = false
  }
)
  }
  onSubmit() {
    this.loading = true
    this.isSubmitted = true;
    if (this.personalDetailForm.invalid) {
      this.loading = false

      return
    }
    var json = JSON.parse(localStorage.UserData);
    
    this.personalDetailFormDetails = {
      "Email": this.personalDetailForm.get('email').value,
      "firstName": this.personalDetailForm.get('name').value,
      "lastName": this.personalDetailForm.get('lname').value,
      "clinicName": this.personalDetailForm.get('clinicName').value,
      "houseNo": this.personalDetailForm.get('blockNo').value,
      "floorNo": this.personalDetailForm.get('floorNo').value,
      "unitNo": this.personalDetailForm.get('unitNo').value,
      "streetName": this.personalDetailForm.get('streetName').value,
      "buildingName": this.personalDetailForm.get('building').value,
      "practiceType": this.personalDetailForm.get('practiceType').value,
      "pincode": this.personalDetailForm.get('postal').value,
      "mobileNumber": this.personalDetailForm.get('mobile').value,
      "customerId": json.body.data.customerId,
      "countryId" : this.personalDetailForm.get('country').value,
      "countryCode" : this.personalDetailForm.get('code').value,
      "speciality" : this.personalDetailForm.get('speciality').value,
    }
debugger
this.userService.postProfilePersonalInfo(this.personalDetailFormDetails).subscribe(

  (success)=>{
    
    this.loading = false;
    this.toastr.success("Profile Details Updated")
    this.toggleButton = true

  },
  (error)=>{
    this.loading = false;
  }
)

  }
  removeAddress(id:number){
    this.loading = true
    this.userService.onDeleteAddress(id).subscribe(

      (success)=>{
        this.getProfileAddressDetails();

      },
      (error)=>{
        this.loading = false;

      }
    )
  }
  openDialog() {
    const dialogRef = this.dialog.open(ChangePasswordComponent, {
      width: '666px'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  openDialog2() {
    const dialogRef = this.dialog.open(SavedPaymentDetailsComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  openDialog3() {
    const dialogRef = this.dialog.open(AddAddressComponent, {
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getProfileAddressDetails();
    });
  }
  openDialog4(id:number) {
    const dialogRef = this.dialog.open(AddAddressComponent, {
      data: {id: id}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getProfileAddressDetails();
    });
  }
  onChange(event) {
    console.log('event :' + event);
    console.log(event.value);
    console.log(this.pincode);
    for(var i=0; i<=this.pincode.length; i++)
    {
if(event.value!=this.pincode[i].mobile)
{
  console.log(event.value);
  console.log(this.pincode[i].mobile);
this.errorMessage="Country code is not correct";
this.ButtonDisbaled = true;
console.log(this.errorMessage);
}
else
{
  this.errorMessage='';
  this.ButtonDisbaled = false;
}
    }
}
onKeyUp(event : HTMLInputElement){
  console.log(event);
  // var myLength = $("#mytextbox").val();
  // console.log(myLength);
  console.log(this.postal);
    console.log(this.postal.length);
    for(var i=0; i<=this.pincode.length; i++)
    {
if(this.postal.length==this.pincode[i].pincode)
{
  this.errorMessages='';
  this.ButtonDisbaled = false;
}
else
{

  console.log(this.postal.length);
  console.log(this.pincode[i].pincode);
this.errorMessages="Pincode is not correct";
this.ButtonDisbaled = true;
console.log(this.errorMessages);
}
    }

}
}
