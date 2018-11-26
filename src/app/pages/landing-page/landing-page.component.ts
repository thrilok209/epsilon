import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  // iconPath:string="../../../../assets/images"
  iconPath:string="assets/images"
msgsRef: AngularFireList<any>;
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
  constructor(db: AngularFireDatabase) {
  this.msgsRef = db.list('messages'); }

  ngOnInit() {
  }
  sendMsg(name , email , phone , msg){
    if(name=="" || email=="" || phone=="" || msg==""){
      alert("Enter your Details")
    }
    if(name!="" && email!="" && phone!="" && msg!=""){
      this.msgsRef.push({'name':name, 'email':email, 'phone':"from landing page",'msg':msg})
      alert("Your message has been submitted.")
    }
  }
}
