import { Component, OnInit } from '@angular/core';
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

  constructor(
    private router: Router,
    private route : ActivatedRoute,
    private userService : UserService
  ) { 
    this.routerUrl = this.router.url;
    console.log('router url::', this.router.url);
  }

  ngOnInit(): void {
    this.onProfileInfo()
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
  dashboard(){
    
    this.router.navigate(['user/dashboard'] )
  }
  profile(){
    
    this.router.navigate(['user/profile'] )
  }
  orders(){
    
    this.router.navigate(['user/orders'] )
  }
  wishList(){
    
    this.router.navigate(['user/wishlist'] )
  }
}

