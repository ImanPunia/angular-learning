import { Component, OnInit, ViewChild, TemplateRef, AfterViewInit  } from '@angular/core';
import { NotifyService } from './notification.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
 
  @ViewChild('renderData' , {static:true}) messageRef: TemplateRef<any>;

  constructor(private readonly notifyser: NotifyService) { }
  
  ngOnInit(): void {
        this.show();
  }

  clear() {
    this.notifyser.clearTemplate();
  }

  show() {
    this.notifyser.initiateview(this.messageRef);
  }
}
