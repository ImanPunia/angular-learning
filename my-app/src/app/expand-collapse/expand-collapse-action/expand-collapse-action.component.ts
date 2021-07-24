import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-expand-collapse-action',
  templateUrl: './expand-collapse-action.component.html',
  styleUrls: ['./expand-collapse-action.component.scss']
})
export class ExpandCollapseActionComponent implements OnInit {

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
