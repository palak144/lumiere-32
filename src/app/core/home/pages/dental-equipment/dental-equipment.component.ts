import { Component, OnInit } from '@angular/core';
import {NgbProgressbarConfig} from '@ng-bootstrap/ng-bootstrap'
@Component({
  selector: 'app-dental-equipment',
  templateUrl: './dental-equipment.component.html',
  styleUrls: ['./dental-equipment.component.scss'],
  providers: [NgbProgressbarConfig]
})
export class DentalEquipmentComponent implements OnInit {

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

  productSlides = [
    {
      img: "assets/images/medical-product/medical_prod-slider.png",
      name: 'Dentmark dental air',
      discountprice: '$ 100.00',
      originalprice: '$ 200.00',
      walletprice:'$ 80.00',
      discountimage: 'assets/images/medical-product/discount-background.png'
      
    },
    {
      img: "assets/images/medical-product/medical_prod-slider.png",
      name: 'Dentmark dental air',
      discountprice: '$ 90.00',
      originalprice: '$ 180.00',
      walletprice:'$ 70.00',
      discountimage: 'assets/images/medical-product/discount-background.png'
    },
    {
      img: "assets/images/medical-product/medical_prod-slider.png",
      name: 'Dentmark dental air',
      discountprice: '$ 120.00',
      originalprice: '$ 240.00',
      walletprice:'$ 100.00',
      discountimage: 'assets/images/medical-product/discount-background.png'
    },
    {
      img: "assets/images/medical-product/medical_prod-slider.png",
      name: 'Dentmark dental air',
      discountprice: '$ 150.00',
      originalprice: '$ 300.00',
      walletprice:'$ 120.00',
      discountimage: 'assets/images/medical-product/discount-background.png'
    },
    {
      img: "assets/images/medical-product/medical_prod-slider.png",
      name: 'Dentmark dental air',
      discountprice: '$ 50.00',
      originalprice: '$ 100.00',
      walletprice:'$ 40.00',
      discountimage: 'assets/images/medical-product/discount-background.png'
    },
    {
      img: "assets/images/medical-product/medical_prod-slider.png",
      name: 'Dentmark dental air',
      discountprice: '$ 50.00',
      originalprice: '$ 100.00',
      walletprice:'$ 40.00',
      discountimage: 'assets/images/medical-product/discount-background.png'
    },
  ];

  productSlideConfig = {
    "slidesToShow": 4, 
    "slidesToScroll": 1,
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
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint:767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
         }
        },
        {
          breakpoint:500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
      }

    ]
  };

  dealsSlides = [
    {
      img: "assets/images/medical-product/deals.png",
      name: 'Braun No touch',
      discountprice: '$ 100.00',
      originalprice: '$ 200.00',
      discountimage: 'assets/images/medical-product/discount-background.png'
    },
    {
      img: "assets/images/medical-product/deals-one.png",
      name: 'Dentmark dental air',
      discountprice: '$ 90.00',
      originalprice: '$ 180.00',
      discountimage: 'assets/images/medical-product/discount-background.png'
    },
    {
      img: "assets/images/medical-product/deals-two.png",
      name: 'Dentmark dental air',
      discountprice: '$ 120.00',
      originalprice: '$ 240.00',
      discountimage: 'assets/images/medical-product/discount-background.png'
    },
    {
      img: "assets/images/medical-product/deals-three.png",
      name: 'Dentmark dental air',
      discountprice: '$ 150.00',
      originalprice: '$ 300.00',
      discountimage: 'assets/images/medical-product/discount-background.png'
    },
    {
      img: "assets/images/medical-product/deals.png",
      name: 'Dentmark dental air',
      discountprice: '$ 50.00',
      originalprice: '$ 100.00',
      discountimage: 'assets/images/medical-product/discount-background.png'
    },
    {
      img: "assets/images/medical-product/deals-two.png",
      name: 'Dentmark dental air',
      discountprice: '$ 50.00',
      originalprice: '$ 100.00',
      discountimage: 'assets/images/medical-product/discount-background.png'
    },
  ];

 dealsSlideConfig = {
    "slidesToShow": 4, 
    "slidesToScroll": 1,
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
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint:767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
         }
        },
        {
          breakpoint:500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
      }
    ]
  };

  popularSlides = [
    {
      img: "assets/images/medical-product/popular.png",
      name: 'surgery scissors',
      product:'71 Product'
    },
    {
      img: "assets/images/medical-product/popular-one.png",
      name: 'Obstetrics & Gynecology',
      product:'81 Product'
    },
    {
      img: "assets/images/medical-product/popular-two.png",
      name: 'Spirometers',
      product:'91 Product'
    },
    {
      img: "assets/images/medical-product/popular-three.png",
      name: 'glaves and mask',
      product:'100 Product'
    },
    {
      img: "assets/images/medical-product/popular.png",
      name: 'Obstetrics & Gynecology',
      product:'60 Product'
    },
    {
      img: "assets/images/medical-product/popular-two.png",
      name: 'Spirometers',
      product:'101 Product'
    },
  ];

  popularSlideConfig = {
    "slidesToShow": 4, 
    "slidesToScroll": 1,
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
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint:767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
         }
        },
        {
          breakpoint:500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
      }
    ]
  };

  shopSlides = [
    {
      img: "assets/images/medical-product/shop.png",
      logo: 'assets/images/medical-product/shop-logo.png',
      discountpercent:'Flat 30% off'
    },
    {
      img: "assets/images/medical-product/shop-one.png",
      logo: 'assets/images/medical-product/shop-logo-one.png',
      discountpercent:'Flat 30% off'
    },
    {
      img: "assets/images/medical-product/shop-two.png", 
      logo: 'assets/images/medical-product/shop-logo-two.png',
      discountpercent:'Flat 30% off'
    },
    {
      img: "assets/images/medical-product/shop-three.png",
      logo: 'assets/images/medical-product/shop-logo-three.png',
      discountpercent:'Flat 30% off'
    },
    {
      img: "assets/images/medical-product/shop.png",
      logo: 'assets/images/medical-product/shop-logo.png',
      discountpercent:'Flat 30% off'
    },
    {
      img: "assets/images/medical-product/shop-two.png",
      logo: 'assets/images/medical-product/shop-logo-two.png',
      discountpercent:'Flat 30% off'
    },
  ];

  shopSlideConfig = {
    "slidesToShow": 4, 
    "slidesToScroll": 1,
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
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint:767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
         }
        },
        {
          breakpoint:500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
      }
    ]
  };

  groupSlides = [
    {
      img: "assets/images/medical-product/group.png",
      discountimage: 'assets/images/medical-product/discount-background.png'
    },
    {
      img: "assets/images/medical-product/group-one.png", 
      discountimage: 'assets/images/medical-product/discount-background.png'
    },
    {
      img: "assets/images/medical-product/group.png",
      discountimage: 'assets/images/medical-product/discount-background.png'
    },
    {
      img: "assets/images/medical-product/group-one.png",
      discountimage: 'assets/images/medical-product/discount-background.png'   
    },
  ];

  groupSlideConfig = {
    "slidesToShow": 2, 
    "slidesToScroll": 1,
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
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
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

  sellerSlides = [ 
    {
      img: "assets/images/medical-product/seller.png",
      image: "assets/images/medical-product/seller-one.png",
      name: 'surgery scissors',
      discountpercent:'Flat 30% off'
    },
    {
      img: "assets/images/medical-product/seller-one.png",
      image: "assets/images/medical-product/seller.png",
      name: 'Obstetrics & Gynecology',
      discountpercent:'Flat 30% off'
    },
    {
      img: "assets/images/medical-product/seller-two.png",
      image: "assets/images/medical-product/seller-three.png",
      name: 'Spirometers',
      discountpercent:'Flat 30% off'
    },
    {
      img: "assets/images/medical-product/seller-three.png",
      image: "assets/images/medical-product/seller.png",
      name: 'glaves and mask',
      discountpercent:'Flat 30% off'
    },
    {
      img: "assets/images/medical-product/seller.png",
      image: "assets/images/medical-product/seller-two.png",
      name: 'Obstetrics & Gynecology',
      discountpercent:'Flat 30% off'
    },
    {
      img: "assets/images/medical-product/seller-two.png",
      image: "assets/images/medical-product/seller-three.png",
      name: 'Spirometers',
      discountpercent:'Flat 30% off'
    },
  ];

  sellerSlideConfig = {
    "slidesToShow": 2, 
    "slidesToScroll": 1, 
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
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint:767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
         }
        },
        {
          breakpoint:500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
      }
    ]
  };

  constructor(
    config: NgbProgressbarConfig
  ) { 
    config.max = 1000;
    config.animated = true;
    config.type = 'avail';
    config.height = '7px';
  }

  ngOnInit(): void {
  }

  slickInit(e) {
  }

} 

