import { AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ElementContentDirective } from 'app/directives/element-content.directive';

@Component({
  selector: 'app-content-projection',
  templateUrl: './content-projection.component.html',
  styleUrls: ['./content-projection.component.scss']
})
export class ContentProjectionComponent implements OnInit, AfterViewInit {
  @ContentChild('header') header:ElementRef;

  @ContentChildren(ElementContentDirective) allchildren!: ElementContentDirective[];
  @ContentChildren(ElementContentDirective) allchildrens!: ElementContentDirective;

  @ViewChild('content') content: TemplateRef<any>;

  childs: TemplateRef<any>[] = [];

  constructor() { }

  ngAfterViewInit(): void {
      this.allchildren.forEach(element => {
        this.childs.push(element.templateRef);
      });
        

  }

  ngOnInit(): void {

  }

}
