import { Component, OnInit, ViewChild, TemplateRef, AfterViewInit  } from '@angular/core';
import { NotifyService } from './notification.service';
import {feedbackData} from './DemoData/starsRatings';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [NotifyService]
})
export class AppComponent implements OnInit{
 
  @ViewChild('renderData' , {static:true}) messageRef: TemplateRef<any>;
  starsRatings = feedbackData;


  constructor(private readonly notifyser: NotifyService) { }
  
  ngOnInit(): void { }

  feedback: FormGroup = new FormGroup({
    "rating": new FormControl(''),
   // "comments": new FormControl('')
  });


  clear() {
    this.notifyser.clearTemplate();
  }

  show() {
    this.notifyser.initiateview(this.messageRef);
  }
}
