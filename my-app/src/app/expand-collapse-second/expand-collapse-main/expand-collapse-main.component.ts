import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-expand-collapse-main',
  templateUrl: './expand-collapse-main.component.html',
  styleUrls: ['./expand-collapse-main.component.scss']
})
export class ExpandCollapseMainComponent implements OnInit {

  @Input() expand = false;
  @Output() expanded = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.expanded.emit();
  }
}
