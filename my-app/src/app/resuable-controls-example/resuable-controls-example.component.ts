import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-resuable-controls-example',
  templateUrl: './resuable-controls-example.component.html',
  styleUrls: ['./resuable-controls-example.component.scss']
})
export class ResuableControlsExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    console.log(f.value);
  }
}
