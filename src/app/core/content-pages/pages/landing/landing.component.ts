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

  trendingSlides = [
    {
      img: "assets/images/dentist.svg",
      text: 'Dental Devices',
      class: 'trending-card-blue'
    },
    {
      img: "assets/images/medical-aids.svg",
      text: 'Medical Aids',
      class: 'trending-card-yellow'
    },
    {
      img: "assets/images/hospital.svg",
      text: 'Hospital Establishment',
      class: 'trending-card-pink'
    },
    {
      img: "assets/images/medical-devices.svg",
      text: 'Medical Devices',
      class: 'trending-card-green'
    },
    {
      img: "assets/images/dentist.svg",
      text: 'Dental Devices',
      class: 'trending-card-blue'
    },
    {
      img: "assets/images/medical-aids.svg",
      text: 'Medical Aids',
      class: 'trending-card-yellow'
    }
  ];


  slideConfig = {
    "slidesToShow": 1, 
    "slidesToScroll": 1,
    "nextArrow": '<i class="fa fa-chevron-right"></i>',
    "prevArrow": '<i class="fa fa-chevron-left"></i>',
  };

  slideTrendingConfig = {
    "slidesToShow": 4, 
    "slidesToScroll": 1,
    "margin": 10,
    // "nextArrow": '<i class="fa fa-chevron-right"></i>'
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1008,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 800,
        settings: "unslick"
      }

    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

  slickInit(e) {
    console.log(e);
    }

}
