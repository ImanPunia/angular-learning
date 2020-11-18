import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NotifyService } from '../notification.service';

@Component({
  selector: 'app-notification-example',
  templateUrl: './notification-example.component.html',
  styleUrls: ['./notification-example.component.scss']
})
export class NotificationExampleComponent implements OnInit {

  @ViewChild('renderDatas' , {static:true}) messageRefs: TemplateRef<any>;

  constructor(private readonly notifyser: NotifyService) { }

  ngOnInit(): void {
    this.show()
  }

  clear() {
    this.notifyser.clearTemplate();
  }

  show() {
    this.notifyser.initiateview(this.messageRefs);
  }
}
