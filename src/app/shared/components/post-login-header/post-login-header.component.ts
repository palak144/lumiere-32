import { Component,Input, Output,EventEmitter, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-post-login-header',
  templateUrl: './post-login-header.component.html',
  styleUrls: ['./post-login-header.component.scss']
})
export class PostLoginHeaderComponent implements OnInit {
  routerUrl:string;
  profileDetails: any;
  editProfile : boolean ;
  breadcrum: string;

  constructor(
    private router: Router,
    private route : ActivatedRoute,
    private userService : UserService
  ) { 
    this.routerUrl = this.router.url;
  }

  ngOnInit(): void {
    this.onProfileInfo()
    this.breadcrum = this.route.snapshot.routeConfig.path
    
  }
  onProfileInfo() {
    this.userService.getProfilePersonalInfo().subscribe(
      (response: HttpResponse<any>) => {
        this.profileDetails = response.body.data
        
      },
      (error) => {

      }
    )
  }
  dashboard(){
    this.editProfile = false;

    this.router.navigate(['user/dashboard'] )
  }
  profile(){
    this.editProfile = true;
    this.router.navigate(['user/profile'] )
  }
  orders(){
    this.editProfile = false;

    this.router.navigate(['user/orders'] )
  }
  wishList(){
    this.router.navigate(['user/wishlist'] )
    this.editProfile = false;

  }
  navigateFromBreadcrum(){
    if(this.breadcrum == "profile"){
      this.editProfile = true;
      this.router.navigate(['user/profile'] )
    }
    if(this.breadcrum == "wishlist"){
      this.editProfile = false;
    this.router.navigate(['user/wishlist'] )
    }
    if(this.breadcrum == "orders"){
      this.editProfile = false;
    this.router.navigate(['user/orders'] )
    }
    if(this.breadcrum == "dashboard"){
      this.editProfile = false;
    this.router.navigate(['user/dashboard'] )
    }
  }
}

