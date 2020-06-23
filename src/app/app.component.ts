import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  title = 'lumeire-angular';
  constructor(
    private router:Router,
  ){

  }
  ngOnInit() {
if(localStorage.getItem('token')){
  this.router.navigateByUrl('/')
} 
else{
  this.router.navigate(['/auth/login'])
} }


}
