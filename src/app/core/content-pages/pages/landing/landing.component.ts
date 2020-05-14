import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {


  slides = [
    {
      img: "assets/images/home-slider-image.svg",
    },
    {
      img: "assets/images/home-slider-image.svg",
    },
    {
      img: "assets/images/home-slider-image.svg",
    },
    {
      img: "assets/images/home-slider-image.svg",
    }
  ];
  slideConfig = {
    "slidesToShow": 1, 
    "slidesToScroll": 1,
  };
  constructor() { }

  ngOnInit(): void {
  }

  slickInit(e) {
    console.log(e);
    }

}
