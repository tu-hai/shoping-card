import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component'
import {Input } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-card-headr',
  templateUrl: './card-headr.component.html',
  styleUrls: ['./card-headr.component.css']
})
export class CardHeadrComponent   {
  @Input() counter: any;
   
}
