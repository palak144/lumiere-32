import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent implements OnInit {
  slides = [
    {
      img: "assets/images/slider-image.svg",
      name: "Join Lumiere32",
      text: " we envision it to bridge the distribution gap between dealers"
    },
    {
      img: "assets/images/slider-image.svg",
      name: "Join Lumiere32",
      text: " we envision it to bridge the distribution gap between dealers"
    },
    {
      img: "assets/images/slider-image.svg",
      name: "Join Lumiere32",
      text: " we envision it to bridge the distribution gap between dealers"
    },
    {
      img: "assets/images/slider-image.svg",
      name: "Join Lumiere32",
      text: " we envision it to bridge the distribution gap between dealers"
    }
  ];
  slideConfig = {
    "slidesToShow": 1, 
    "slidesToScroll": 1,
    "dots": true,
    "prevArrow": false,
    "nextArrow": false
  };

  routerUrl: string;
  
  constructor(
    public router: Router
  ) {
    this.routerUrl = this.router.url;
   }

  ngOnInit(): void {
  
  }

  slickInit(e) {
  }

}
