import { AfterContentInit, Component, ContentChild, ContentChildren, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CollapseComponent } from '../collapse/collapse.component';
import { ExpandCollapseActionComponent } from '../expand-collapse-action/expand-collapse-action.component';
import { ExpandComponent } from '../expand/expand.component';

@Component({
  selector: 'app-expand-collapse',
  templateUrl: './expand-collapse.component.html',
  styleUrls: ['./expand-collapse.component.scss']
})
export class ExpandCollapseComponent implements OnInit {
  @Output() expanded = new EventEmitter<boolean>();
  @Input() expand;

  @ContentChildren(ExpandComponent) expandChildren:ExpandComponent[];
  @ContentChildren(CollapseComponent) collapseChildren:CollapseComponent[];
  @ContentChild(ExpandCollapseActionComponent,{ static: true}) exapndCollpaseAction: ExpandCollapseActionComponent;


  constructor() { }

  ngOnInit(): void {
    this.exapndCollpaseAction.expanded.subscribe(value=> {
      this.expanded.emit(value);
      this.expand= value;
      this.changeChild();
    })
  }

  changeExpandChild(){
    this.expandChildren.forEach(ele => ele.expand = this.expand)
  }

  changeCollapseChild(){
    this.collapseChildren.forEach(ele => ele.expand = this.expand)
  }

  changeChild(){
    this.changeExpandChild();
    this.changeCollapseChild();
  }
}
