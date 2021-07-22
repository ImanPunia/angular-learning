import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appElementContent]'
})
export class ElementContentDirective {

  constructor(public templateRef: TemplateRef<any>) { }

}
