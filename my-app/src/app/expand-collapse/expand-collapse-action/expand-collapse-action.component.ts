import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ExpandCollapseDirective } from 'app/directives/expand-collapse.directive';
import { ExpandCollapseComponent } from '../expand-collpase/expand-collapse.component';

@Component({
  selector: 'app-expand-collapse-action',
  templateUrl: './expand-collapse-action.component.html',
  styleUrls: ['./expand-collapse-action.component.scss']
})
export class ExpandCollapseActionComponent implements OnInit {

  constructor(public expandCollapse: ExpandCollapseDirective) { }

  ngOnInit(): void {
  }
  
  onClick(){
    this.expandCollapse.changeState(!this.expandCollapse.expand);
  }

  

}
