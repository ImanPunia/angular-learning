import { Component, Input, OnInit } from '@angular/core';
import { ExpandCollapseComponent } from '../expand-collpase/expand-collapse.component';

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss']
})
export class CollapseComponent implements OnInit {
  constructor(public expandCollapse: ExpandCollapseComponent) { }

  ngOnInit(): void {
  }

}
