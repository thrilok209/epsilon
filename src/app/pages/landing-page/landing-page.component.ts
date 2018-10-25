import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  iconPath:string="../../../../assets/images/icons"
  public reportCarousel:any={
    loop:true,
    margin:10,
    dots:false,
    navigation:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    pagination:false,
    responsiveClass:true,
    responsive:{
    0 : {
          items:1
    },
    // breakpoint from 480 up
    480 : {
            items:2
    },
    // breakpoint from 768 up
    768 : {
            items:3
    },
    //breakpoint from 1000 up
        1000:{
            items:5
        }
    }
  }

  images=[{"title":"AI in Fintech","text":"Global Market Size, Share, Trends, Forecasts and Startup Profiles"} ,
          {"title":"AI in Fintech","text":"Global Market Size, Share, Trends, Forecasts and Startup Profiles"} ,
          {"title":"AI in Fintech","text":"Global Market Size, Share, Trends, Forecasts and Startup Profiles"} ,
          {"title":"AI in Fintech","text":"Global Market Size, Share, Trends, Forecasts and Startup Profiles"} ,
          {"title":"AI in Fintech","text":"Global Market Size, Share, Trends, Forecasts and Startup Profiles"} ,
          {"title":"AI in Fintech","text":"Global Market Size, Share, Trends, Forecasts and Startup Profiles"} ,
          {"title":"AI in Fintech","text":"Global Market Size, Share, Trends, Forecasts and Startup Profiles"} ,
  ]
  constructor() { }

  ngOnInit() {
  }

}
