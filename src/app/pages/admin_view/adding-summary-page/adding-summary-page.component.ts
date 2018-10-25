import { Component, OnInit , Input} from '@angular/core';
import { ActivatedRoute ,  Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-adding-summary-page',
  templateUrl: './adding-summary-page.component.html',
  styleUrls: ['./adding-summary-page.component.css']
})
export class AddingSummaryPageComponent implements OnInit {
sideHeadingArray=[{'heading':"cfv", points:[]}]
// HeadingType:{
//   "heading":string,
//   points:[]
// }
htmlCode
 title:string="hy";
  constructor(private router: ActivatedRoute , private http: HttpClient) { }
  ReportId:string;
  ngOnInit() {
    this.ReportId= this.router.snapshot.paramMap.get('id')
    console.log(this.ReportId)

  }
  // addContent(text){
  //     const uri = 'http://localhost:4000/reports/update/'+ this.ReportId;
  //   let obj={
  //     reportSumUrl:text
  //   }
  //   this.http.post(uri, obj).subscribe(res => {
  //     console.log(res)
  // });
  // }

  addContent(input , index){
    console.log("before",this.sideHeadingArray)
    let x = this.sideHeadingArray
    console.log(x)
    if(input=='subheading'){

      this.sideHeadingArray.push({'heading':"", points:[""]})
      console.log("after",this.sideHeadingArray)

    }
    if(input=='point'){
      this.sideHeadingArray[index].points.push("")
    }
    if(input=='show'){
      console.log(this.sideHeadingArray)
    }

  }

  preview(){
    let html="<h1>"+this.title+"</h1>"

    for(let i = 0; i<this.sideHeadingArray.length ; i++){
      html=html+"<h2>"+this.sideHeadingArray[i].heading+" </h2>"+"<ul>"

      for(let j = 0 ; j<this.sideHeadingArray[i].points.length ; j++){
        html=html+"<li>"+this.sideHeadingArray[i].points[j]+"</li>"
      }
      html=html+"</ul>"
    }
    this.htmlCode=html
    console.log(html)
  }
}
