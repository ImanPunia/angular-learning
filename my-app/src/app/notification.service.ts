import { Injectable, TemplateRef, ViewContainerRef } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  showData: TemplateRef<any>;
  containerRef: ViewContainerRef;
  ViewSubject = new BehaviorSubject<TemplateRef<any>>(null);
  ViewSubject$ = this.ViewSubject.asObservable();

  constructor() { }

  initiateview(value) {
    this.ViewSubject.next(value);
  }

  clearTemplate() {
    this.containerRef.clear();
  }

}
