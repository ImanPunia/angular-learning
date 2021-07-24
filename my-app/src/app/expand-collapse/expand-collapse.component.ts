import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-expand-collapse',
  templateUrl: './expand-collapse.component.html',
  styleUrls: ['./expand-collapse.component.scss']
})
export class ExpandCollapseComponent implements OnInit {

  @Input() expand  =  false;
  @Output() expanded = new EventEmitter<boolean>()
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
      this.expand = !this.expand;
      this.expanded.emit(this.expand);
  }
}
