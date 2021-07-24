import { AfterContentInit, Component, ContentChild, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  @ContentChild(ExpandCollapseActionComponent,{ static: true}) exapndCollpaseAction: ExpandCollapseActionComponent;
  @ContentChild(CollapseComponent, {static:  true}) collapseChild: CollapseComponent;
  @ContentChild(ExpandComponent , {static:  true}) expandChild: ExpandComponent;


  constructor() { }

  ngOnInit(): void {
    this.exapndCollpaseAction.expanded.subscribe(value=> {
      this.expanded.emit(value);
      this.expand= value;
      this.changeChild();
    })
  }

  changeChild(){
    this.expandChild.expand  = this.expand;
    this.collapseChild.expand = this.expand;
  }
}
