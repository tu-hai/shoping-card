import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component'
import { from } from 'rxjs';

@Component({
  selector: 'app-card-headr',
  templateUrl: './card-headr.component.html',
  styleUrls: ['./card-headr.component.css']
})
export class CardHeadrComponent  extends AppComponent implements OnInit{

  constructor() {
    super();
  }
  
  counter = this.producs.length
 
   ngOnInit() {
      console.log("ss", this.counter)
   }
  

}
