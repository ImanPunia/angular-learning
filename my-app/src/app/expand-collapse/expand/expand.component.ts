import { Component, Input, OnInit } from '@angular/core';
import { ExpandCollapseMediumDirective } from 'app/directives/expand-collapse-medium.directive';
import { ExpandCollapseDirective } from 'app/directives/expand-collapse.directive';
import { ExpandCollapseComponent } from '../expand-collpase/expand-collapse.component';

@Component({
  selector: 'app-expand',
  templateUrl: './expand.component.html',
  styleUrls: ['./expand.component.scss']
})
export class ExpandComponent implements OnInit {

  constructor(public expandCollapse: ExpandCollapseMediumDirective) { }

  ngOnInit(): void {
  }

}
