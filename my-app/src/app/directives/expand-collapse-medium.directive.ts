import { Directive } from '@angular/core';
import { ExpandCollapseDirective } from './expand-collapse.directive';

@Directive({
  selector: '[appExpandCollapseMedium]'
})
export class ExpandCollapseMediumDirective {

  toggle: ExpandCollapseDirective;

  constructor(private expandCollapsedir: ExpandCollapseDirective) { 
    this.toggle = expandCollapsedir;
  }



  changeState(value){
    this.toggle.expand = value;
    this.toggle.expanded.emit(value);
  }
}
