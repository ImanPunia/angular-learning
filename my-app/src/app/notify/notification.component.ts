import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { NotifyService } from '../notify.service';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.scss']
})
export class NotifyComponent implements OnInit {

  showMessage: TemplateRef<any>;
  
  constructor(private readonly notifySer: NotifyService) { }

  ngOnInit(): void {
    this.showMessage = this.notifySer.showData;
  }

}
