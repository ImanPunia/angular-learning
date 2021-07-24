import { Directive, Host, Input, OnChanges, Optional, SimpleChanges } from '@angular/core';
import { ExpandCollapseDirective } from './expand-collapse.directive';

@Directive({
  selector: '[appExpandCollapse],[appExpandCollapseMedium]'
})
export class ExpandCollapseMediumDirective implements OnChanges {

  @Input() ExpandCollapse: ExpandCollapseDirective;
  expandCollapse: ExpandCollapseDirective = this.expandCollapsedir;

  constructor(@Host() @Optional() private readonly expandCollapsedir: ExpandCollapseDirective) { 
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    const { ExpandCollapse } = changes;

    if(ExpandCollapse){
      this.expandCollapse = this.ExpandCollapse || this.expandCollapse;
    }
  }

  changeState(value){
    this.expandCollapse.expand = value;
    this.expandCollapse.expanded.emit(value);
  }
}
