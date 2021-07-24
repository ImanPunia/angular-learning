import { TemplateRef, ViewContainerRef } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

export class NotifyService {

  containerRef: ViewContainerRef;
  ViewSubject = new Subject<TemplateRef<any>>();

  constructor() { }

  initiateview(value) {
    this.clearTemplate();
    this.ViewSubject.next(value);
  }

  clearTemplate() {
    this.containerRef.clear();
  }

}
