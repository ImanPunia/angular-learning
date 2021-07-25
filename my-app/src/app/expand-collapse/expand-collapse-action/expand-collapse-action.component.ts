import { Component,OnInit } from '@angular/core';
import { ExpandCollapseMediumDirective } from 'app/directives/expand-collapse-medium.directive';

@Component({
  selector: 'app-expand-collapse-action',
  templateUrl: './expand-collapse-action.component.html',
  styleUrls: ['./expand-collapse-action.component.scss']
})
export class ExpandCollapseActionComponent implements OnInit {

  constructor(public expandCollapse: ExpandCollapseMediumDirective) { }

  ngOnInit(): void {
  }
  
  onClick(){
    this.expandCollapse.changeState(!this.expandCollapse.expandCollapse.expand);
  }

}
