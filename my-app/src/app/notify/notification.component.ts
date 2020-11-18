import { Component, OnInit, Input, TemplateRef, ViewContainerRef, ViewChild, AfterViewInit } from '@angular/core';
import { NotifyService } from '../notification.service';

@Component({
  selector: 'app-notify',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotifyComponent implements OnInit {

  @ViewChild('showMessage', {read: ViewContainerRef, static: true}) showMessage: ViewContainerRef;
  constructor(private readonly notifySer: NotifyService) { }
  ngOnInit(): void {
    this.notifySer.ViewSubject$.subscribe((value) => {
        this.showView(value);
    });
  }

  showView(value) {
    this.notifySer.containerRef = this.showMessage;
    this.showMessage.createEmbeddedView(value);
  }

}
