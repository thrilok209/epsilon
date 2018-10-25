import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize} from 'rxjs/operators';
import {  Observable} from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';



@Component({
  selector: 'app-reports-view',
  templateUrl: './reports-view.component.html',
  styleUrls: ['./reports-view.component.css']
})
export class ReportsViewComponent implements OnInit {
  smalIconPath:string="../../../../assets/images/icons/icons-small"
reports;
reportsCategories=[{"category":"Financial Services" , "sub":[1,2,3,4]} , {"category":"Healthcare" , sub:[1,2,3,4]}]
  constructor(private http: HttpClient) { }

  ngOnInit() {
    let url='http://localhost:4000/reports'
    this.http.get(url).subscribe(res => {
      this.reports=res
      console.log(this.reports[0].title)
    })
  }



}
