import { Directive, EventEmitter, Input, Output } from '@angular/core';

@Directive({
  selector: '[appExpandCollapse]'
})
export class ExpandCollapseDirective {
  
  @Input() expand = false ;
  @Output() expanded = new EventEmitter<boolean>();

  constructor() { }

  
}
