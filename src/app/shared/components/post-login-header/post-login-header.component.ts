import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-login-header',
  templateUrl: './post-login-header.component.html',
  styleUrls: ['./post-login-header.component.scss']
})
export class PostLoginHeaderComponent implements OnInit {

  routerUrl:string;

  constructor(
    private router: Router,
    private route : ActivatedRoute
  ) { 
    this.routerUrl = this.router.url;
    console.log('router url::', this.router.url);
  }

  ngOnInit(): void {
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



