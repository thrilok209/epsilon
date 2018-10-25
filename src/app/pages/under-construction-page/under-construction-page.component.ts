import {Component, OnChanges, SimpleChanges, Input , OnInit} from '@angular/core';
import { ActivatedRoute ,  Router} from '@angular/router';

@Component({
  selector: 'app-under-construction-page',
  templateUrl: './under-construction-page.component.html',
  styleUrls: ['./under-construction-page.component.css']
})
export class UnderConstructionPageComponent implements OnInit {

 caption:string;


  constructor(private actRoute: ActivatedRoute,
    private router: Router) {
  }
       ngOnInit(){
         this.actRoute.params.subscribe(params => {
             this.caption = params['page'];
            });
            console.log(this.caption)
       }

}
