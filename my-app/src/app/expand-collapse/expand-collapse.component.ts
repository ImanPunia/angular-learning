import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expand-collapse',
  templateUrl: './expand-collapse.component.html',
  styleUrls: ['./expand-collapse.component.scss']
})
export class ExpandCollapseComponent implements OnInit {

  expand  =  false;
  
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
      this.expand = !this.expand;
  }
}
