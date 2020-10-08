import { Component, OnInit, Input, TemplateRef, ViewContainerRef, ViewChild, AfterViewInit } from '@angular/core';
import { NotifyService } from '../notification.service';

@Component({
  selector: 'app-notify',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotifyComponent implements OnInit, AfterViewInit {

  @ViewChild('showMessage', {read: ViewContainerRef}) showMessage: ViewContainerRef;
  constructor(private readonly notifySer: NotifyService) { }

  ngAfterViewInit(): void {
    this.notifySer.containerRef = this.showMessage;
    this.showMessage.createEmbeddedView(this.notifySer.showData);
  }

  ngOnInit(): void {

  }

}
