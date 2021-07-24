import { Component, ContentChild, ContentChildren, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Input() expand = false ;

  constructor() { }

  ngOnInit(): void { }


  changeState(value){
    this.expand = value;
    this.expanded.emit(this.expand);
  }
}
