import { Component, OnInit } from '@angular/core';
import { ExpandCollapseMediumDirective } from 'app/directives/expand-collapse-medium.directive';
import { ExpandCollapseDirective } from 'app/directives/expand-collapse.directive';

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss']
})
export class CollapseComponent implements OnInit {
  constructor(public expandCollapse: ExpandCollapseMediumDirective) { }

  ngOnInit(): void {
  }

}
