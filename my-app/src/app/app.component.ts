import { Component, OnInit, ViewChild, TemplateRef, AfterViewInit  } from '@angular/core';
import { NotifyService } from './notification.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit{
 
  @ViewChild('renderData' , {static:true}) messageRef: TemplateRef<any>;
  constructor(private readonly notifyser: NotifyService) {

  }
  ngAfterViewInit(): void {
  }
 
  ngOnInit(): void {
        this.notifyser.showTemplate(this.messageRef);

  }

  clear() {
    this.notifyser.clearTemplate();
  }

 



}
