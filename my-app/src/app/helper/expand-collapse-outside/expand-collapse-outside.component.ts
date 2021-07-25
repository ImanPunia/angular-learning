import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-expand-collapse-outside',
  templateUrl: './expand-collapse-outside.component.html',
  styleUrls: ['./expand-collapse-outside.component.scss']
})
export class ExpandCollapseOutsideComponent implements OnInit {
  @Input() expand: false;
  @Output() expanded = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  expandTile(){
    this.expanded.emit();
  }

}
