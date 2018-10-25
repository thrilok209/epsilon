import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,  Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-detail-report-view',
  templateUrl: './detail-report-view.component.html',
  styleUrls: ['./detail-report-view.component.scss']
})
export class DetailReportViewComponent implements OnInit {
  id: string;
    private sub: any;
    reportData: any;
    summaryContentData:any;
    page;
  constructor(private route: ActivatedRoute,
    private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
     });
    console.log(this.id);
    const url = 'http://localhost:4000/reports/view/'+this.id
    this.http.get(url).subscribe(res =>{
      console.log(res)
      this.reportData=res;
      this.summaryContentToDisplay('summary')
    })
  }
  summaryContentToDisplay(tab){
    if(this.route.snapshot.firstChild.url[0].path=='report-summary' || tab=='summary'){
      this.summaryContentData=this.reportData.reportSumUrl
    }
    if(this.route.snapshot.firstChild.url[0].path=='table-content' || tab=='table-content'){
      this.summaryContentData="table of content"
    }
  }


}
