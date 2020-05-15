import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {


  slides = [
    {
      img: "assets/images/home-slider-image.png",
    },
    {
      img: "assets/images/home-slider-image.png",
    },
    {
      img: "assets/images/home-slider-image.png",
    },
    {
      img: "assets/images/home-slider-image.png",
    }
  ];
  slideConfig = {
    "slidesToShow": 1, 
    "slidesToScroll": 1,
    "nextArrow": '<i class="fa fa-chevron-right"></i>',
    "prevArrow": '<i class="fa fa-chevron-left"></i>',
  };
  constructor() { }

  ngOnInit(): void {
  }

  slickInit(e) {
    console.log(e);
    }

}
