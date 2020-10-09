import { Injectable, TemplateRef, ViewContainerRef } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  containerRef: ViewContainerRef;
  ViewSubject = new BehaviorSubject<TemplateRef<any>>(null);
  ViewSubject$ = this.ViewSubject.asObservable();

  constructor() { }

  initiateview(value) {
    if(this.containerRef)  {
      this.clearTemplate();
    }
    this.ViewSubject.next(value);
  }

  clearTemplate() {
    this.containerRef.clear();
  }

}
