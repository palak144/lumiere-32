import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(    private router:Router,
    public authService :AuthService
    ) { }

  ngOnInit(): void {
    if (localStorage.UserData) {
      this.authService.loginFlag = true;
      var json = JSON.parse(localStorage.UserData);
      this.authService.loggedInCustomerName = json.data.firstName
    }
  }
  loginPage(){
      
      this.router.navigate(['/auth/login'])
    
  }
  logout(){
    
      localStorage.clear();
    this.authService.loggedInCustomerName = "Login / Signup";
    this.authService.loginFlag = false;
     this.router.navigate(['/auth/login'])
    
  }
  dashboard(){
    this.router.navigate(['/user/dashboard'])

  }
  // userDashboard(){
  //   this.router.navigate(['/auth/login'])
  // }
}
