import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
 // messages: string[] = [];

  constructor( readonly messgServ: MessagesService) { }

  ngOnInit(): void {
    //this.messages = this.messgServ.messages;
  }

  DeleteMessages() {
    this.messgServ.clearMessages();
  }
}
