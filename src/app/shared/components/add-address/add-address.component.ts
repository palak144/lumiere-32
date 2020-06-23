import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.scss']
})
export class AddAddressComponent implements OnInit {

  addressForm: FormGroup;
  isSubmitted: boolean;
  public loading = false;
  addressFormDetails: any;
  addressTitle: string;
editMode:boolean;
addresses:any;
address:any;
private _unsubscribe = new Subject<boolean>();
id:number
    constructor(
      public formBuilder : FormBuilder,
      public userService:UserService,
      public toastr : ToastrService,
      private router:Router,
      public dialog: MatDialog,
      private activatedRoute:ActivatedRoute
    ) { }

  ngOnInit(): void {
 this.addressTitle = "Add New Customer Group"

    this.activatedRoute.params.subscribe(
      (id: Params) => {
        this.id = +id['id']
        this.editMode = id['id'] != null
        console.log(this.editMode)
        
        this.initForm()
      }
    )
  }

  get addressControls(){
    return this.addressForm.controls;
  }
  onSubmit(){
    debugger
    this.isSubmitted = true;
    this.loading = true;

    if (this.addressForm.invalid) {
      this.loading = false;
      return;
    }
   
    this.addressFormDetails = {
      
    "name": this.addressForm.get('name').value,
    "clinicName":this.addressForm.get('clinicName').value,
    "blockNo":this.addressForm.get('blockNo').value,
    "floorNo":this.addressForm.get('floorNo').value,
    "unitNo":this.addressForm.get('unitNo').value,
    "buildingName":this.addressForm.get('building').value,
    "streetName":this.addressForm.get('streetName').value,
    "country":this.addressForm.get('country').value,
    "zip":this.addressForm.get('postal').value,
   }
   if (this.id ) {
    this.addressFormDetails.id = this.id;
  }
   if (this.editMode) {
      debugger
    this.addressTitle = "Edit Customer Group"
    this.userService.onUpdateAdd(this.addressFormDetails).subscribe(
      data => {
        this.loading = false;
this.toastr.success("Address Editted Successfully")
this.router.navigate(['user/profile'])   
},
      error => {
        this.loading = false;
        this.toastr.error(error.message)

      });



  }
  else{
    debugger
    this.userService.onAddressAdd(this.addressFormDetails).subscribe(
      data => {   
        this.loading = false;
        this.toastr.success("Address Added Successfully")
        this.router.navigate(['user/profile'])   
     },
      error => {
        this.loading = false;
        this.toastr.error(error.error.message);
        ;
      });    
  }
  }
  initForm(){
    let name = "";
    let clinicName = "";
    let blockNo = "";
    let floorNo = "";
    let unitNo = "";
    let streetName = "";
    let building = "";
    let postal = "";
    if(this.editMode){
      this.addressTitle = "Edit Customer Group"
      this.userService.getProfileAddressAdd().pipe(takeUntil(this._unsubscribe)).subscribe(
        (success:any)=>{
          this.addresses = success.body.data.result;
          this.address = this.addresses.filter((item: any) => {
            return this.id === item.id
          })   
          this.addressForm.patchValue({
            "name" : this.address[0].name,
            "clinicName" : this.address[0].clinicName,
            "building" : this.address[0].buildingName,
            "floorNo" : this.address[0].floorNo,
            "streetName" : this.address[0].streetName,
            "unitNo" : this.address[0].unitNo,
            "blockNo" : this.address[0].blockNo,
            "postal" : this.address[0].zip,
          })
debugger
      },
        error=>{
          
        }
      )

      }
      this.addressForm = new FormGroup({
        "country": new FormControl(1, Validators.required),
        "name": new FormControl(name, Validators.required),
        "clinicName": new FormControl(clinicName, Validators.required),
        "blockNo": new FormControl(blockNo, Validators.required),
        "floorNo": new FormControl(floorNo, Validators.required),
        "unitNo": new FormControl(unitNo, Validators.required),
        "streetName": new FormControl(streetName, Validators.required),
        "building": new FormControl(building, Validators.required),
        "postal": new FormControl(postal, [ Validators.required,
          Validators.pattern('^[0-9\+\-]{6}$')])
      });
  }
}
