import { Component, OnDestroy, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-odd-even-box',
  templateUrl: './odd-even-box.component.html',
  styleUrls: ['./odd-even-box.component.scss']
})
export class OddEvenBoxComponent implements OnInit {

  @ViewChild('container', { read: ViewContainerRef, static: true }) boxContainer: ViewContainerRef;
  @ViewChild('value', { read: TemplateRef, static: true }) boxTemplate: TemplateRef<any>;

  constructor() { 

  }
  
  private printData(length: number) {

    var i = 0;
    
    var intervalId = setInterval(() => {
      if(i === length){
          clearInterval(intervalId);
      }
      const context = {
        data: i
      };
      this.boxContainer.createEmbeddedView(this.boxTemplate, context);
      i++;
    }, 1000);
  }

  ngOnInit(): void {
    this.printData(100);
  }

 
}
