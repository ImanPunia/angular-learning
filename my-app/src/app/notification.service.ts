import { Injectable, TemplateRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  showData: TemplateRef<any>;


  constructor() { }

  clearTemplate() {
    this.showData = null;
  }

  showTemplate(data: TemplateRef<any>) {
    this.showData = data; 
  }
}
