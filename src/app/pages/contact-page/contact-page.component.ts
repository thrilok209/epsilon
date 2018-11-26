import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
msgsRef: AngularFireList<any>;
msgSection:boolean=false;
thankSection:boolean=true;
  constructor(db: AngularFireDatabase) {
  this.msgsRef = db.list('messages'); }

  ngOnInit() {
  }
  sendMsg(name , email , phone , msg){
    if(name=="" || email=="" || phone=="" || msg==""){
      alert("Enter your Details")
    }
    if(name!="" && email!="" && phone!="" && msg!=""){
      this.msgsRef.push({'name':name, 'email':email, 'phone':phone,'msg':msg})
      this.msgSection=true;
      this.thankSection=false;
    }
  }
}
