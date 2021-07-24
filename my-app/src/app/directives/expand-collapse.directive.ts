import { Directive, EventEmitter, Input, Output } from '@angular/core';

@Directive({
  exportAs: 'appExpandCollapse',
  selector: '[appExpandCollapse]'
})
export class ExpandCollapseDirective {
  
  @Input() expand = false ;
  @Output() expanded = new EventEmitter<boolean>();

  constructor() { }

  
}
