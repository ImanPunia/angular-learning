import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-example',
  templateUrl: './reactive-form-example.component.html',
  styleUrls: ['./reactive-form-example.component.scss']
})
export class ReactiveFormExampleComponent implements OnInit {

  name = new FormControl();

  loginInfo = new FormGroup({
    userName : new FormControl(''),
    password : new FormControl('')
  })

  formData;
  newValue: string;

  constructor() { }

  ngOnInit(): void {

    this.name.valueChanges.subscribe((value) => {
        this.newValue = value;
    })

  }

  changeValue() {
    this.name.setValue('Red')
  }

  onSubmit() {
    this.formData = this.loginInfo.value;
  }
}
