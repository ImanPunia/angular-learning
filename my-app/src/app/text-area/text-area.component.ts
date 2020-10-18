import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NotifyService } from '../notification.service';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss'],
  providers: [NotifyService] //overiding the instance of app component
})
export class TextAreaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }


}