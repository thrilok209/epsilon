import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize} from 'rxjs/operators';
import {  Observable} from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ActivatedRoute ,  Router , NavigationExtras} from '@angular/router';



@Component({
  selector: 'app-admin-console',
  templateUrl: './admin-console.component.html',
  styleUrls: ['./admin-console.component.css']
})
  export class AdminConsoleComponent implements OnInit {
    optionSelected: any;
    category=["a","b","c","d","e"]
    uploadPercent: Observable<number>;
    downloadURL: Observable<string>;
    submittedReportId:string;
    titlePart:boolean=false;
    imgPart:boolean=true;
    pdfPart:boolean=true;
      finalPart:boolean=true;

  constructor(private storage: AngularFireStorage ,private router: Router,private r: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {

    // this.r.queryParams:this.submittedReportId
    this.router.navigate(['/create/summary/', "5bcf72497fd7661a0e2412ff"])
  }
  uploadFile(event, fileType) {
    const file = event.target.files[0];
    let filePath;
    if(fileType==1){ filePath = this.submittedReportId+"/displayimg" ;}
    if(fileType==2){filePath = this.submittedReportId+"/buyPDF" ;}

    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    let obj={}
    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL()
          this.downloadURL.subscribe(url=>{

            const uri = 'http://localhost:4000/reports/update/'+ this.submittedReportId;
            console.log(url)
            if(fileType==1){
              obj = {
                imgUrl:url,
                status: "uploaded img"
              };
            }

            if(fileType==2){
              obj = {
                buyurl: url,
                status: "uploaded pdf"
              };
            }

            this.http.post(uri, obj).subscribe(res => {
              console.log(res)
              if(fileType==1){ this.imgPart=true; this.pdfPart=false; this.uploadPercent}
              if(fileType==2){ this.finalPart=false; this.pdfPart=true}

            });
          })



        } )
     )
    .subscribe()
  }
  selectCategory(){
    console.log("e")
  }

  selectChangeHandler(event){
   console.log(event.target.value); //option value will be sent as event
   this.optionSelected=event.target.value
  }

  addCoin(name) {
    const uri = 'http://localhost:4000/reports/add';
    let categoryArray=[]
    categoryArray.push( this.optionSelected)
    const obj = {
      title: name,
      category: categoryArray,
      status: "uploaded Title"
    };
    this.http.post(uri, obj)
        .subscribe(res => {
          this.submittedReportId=res["_id"]
          console.log(res)
        });
        this.titlePart=true;
        this.imgPart=false;
    }
    openPage(x){
      if(x==2){
        location.reload();
      }

    }
  }
