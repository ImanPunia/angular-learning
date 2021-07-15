import { Component, ContentChild, ElementRef, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-content-projection',
  templateUrl: './content-projection.component.html',
  styleUrls: ['./content-projection.component.scss']
})
export class ContentProjectionComponent implements OnInit {
  @ContentChild('header') header:ElementRef;
  @ContentChild('conditionalRendering') conditional: TemplateRef<ElementRef>;
  constructor() { }

  ngOnInit(): void {

  }

}
