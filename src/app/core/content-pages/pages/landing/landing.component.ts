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

  featureSlides = [
      {
        img: "assets/images/featured/techinasia-logo.svg"
      },
      {
        img: "assets/images/featured/dentalasialogo.svg"
      },
      {
        img: "assets/images/featured/e27logo.svg"
      },
      {
        img: "assets/images/featured/seamlesslogo.svg"
      },
      {
        img: "assets/images/featured/fundedherelogo.svg"
      },
      {
        img: "assets/images/featured/seamlesslogo.svg"
      },
  ];
  

  customerSlides = [
    {
      text: 'In our village, when we were young, we used to eat bottle gourds right off the farm, and they were sweet and soft. After many decades, I have the same taste in my mouth!  when an unknown printer took a galley of type and scrambled it After many decades, I have the same taste in my mouth!  when an unknown printer took a galley of type and scrambled it printer took a galley of type and scrambled it After many decades,  when an unknown printer took a galley of type and scrambled it printer took a galley of type and scrambled it After many decades.',
      img : 'assets/images/customer-image.svg',
      name: 'Camila Soler'
    },
    {
      text: 'In our village, when we were young, we used to eat bottle gourds right off the farm, and they were sweet and soft. After many decades, I have the same taste in my mouth!  when an unknown printer took a galley of type and scrambled it After many decades, I have the same taste in my mouth!  when an unknown printer took a galley of type and scrambled it printer took a galley of type and scrambled it After many decades,  when an unknown printer took a galley of type and scrambled it printer took a galley of type and scrambled it After many decades.',
      img : 'assets/images/customer-image.svg',
      name: 'Camila Soler'
    }
  ];

  customerSlideConfig = {
    "slidesToShow": 1, 
    "slidesToScroll": 1,
    "nextArrow": '<i class="fa fa-long-arrow-right"></i>',
    "prevArrow": '<i class="fa fa-long-arrow-left"></i>',
    "infinite": false
  };

  featureSlideConfig = {
    "slidesToShow": 5, 
    "slidesToScroll": 5,
    "margin": 10,
    "nextArrow": '<i class="fa fa-chevron-right"></i>',
    "prevArrow": '<i class="fa fa-chevron-left"></i>',
    "dots": true,
    "infinite": false,
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
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]
  };


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
