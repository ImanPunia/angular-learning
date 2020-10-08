import { Injectable, TemplateRef, ViewContainerRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  showData: TemplateRef<any>;
  containerRef: ViewContainerRef;

  constructor() { }

  clearTemplate() {
    this.containerRef.clear();
  }

}
