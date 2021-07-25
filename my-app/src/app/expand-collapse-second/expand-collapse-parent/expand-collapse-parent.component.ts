import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-expand-collapse-parent',
  templateUrl: './expand-collapse-parent.component.html',
  styleUrls: ['./expand-collapse-parent.component.scss']
})
export class ExpandCollapseParentComponent implements OnInit, OnChanges {
  @Input() expand = false;
  @Input() userTemplate: TemplateRef<any>;

  @Output() expandTile = new EventEmitter<boolean>();

  expandBody = () => this.changeView(!this.expand);
  
  contextObj = {expanded: this.expand , show: this.expandBody };

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    const {expand} = changes;
    if(expand){
      this.contextObj.expanded =  this.expand;
    }
  }

  ngOnInit(): void {
  }

  changeView(expand: boolean) {
    this.expand = expand;
    this.contextObj.expanded = expand;
    this.expandTile.emit(this.expand);
  }

}
