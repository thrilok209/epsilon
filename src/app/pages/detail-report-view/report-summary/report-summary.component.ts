import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,  Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-report-summary',
  templateUrl: './report-summary.component.html',
  styleUrls: ['./report-summary.component.css']
})
export class ReportSummaryComponent implements OnInit {
ReportId:string;
reportData:any;
  constructor(private router: ActivatedRoute , private http: HttpClient) { }

  ngOnInit() {
    this.ReportId= this.router.snapshot.paramMap.get('id')
    console.log(this.ReportId)

    const url = 'http://localhost:4000/reports/view/'+this.ReportId
    this.http.get(url).subscribe(res =>{
      console.log(res)
      this.reportData=res
    })
  }

}
