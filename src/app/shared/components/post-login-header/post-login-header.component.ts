import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-login-header',
  templateUrl: './post-login-header.component.html',
  styleUrls: ['./post-login-header.component.scss']
})
export class PostLoginHeaderComponent implements OnInit {

  routerUrl:string;

  constructor(
    private router: Router
  ) { 
    this.routerUrl = this.router.url;
    console.log('router url::', this.router.url);
  }

  ngOnInit(): void {
  }

}

