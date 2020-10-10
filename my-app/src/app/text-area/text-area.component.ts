import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NotifyService } from '../notification.service';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss'],
  providers: [NotifyService]
})
export class TextAreaComponent implements OnInit {

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