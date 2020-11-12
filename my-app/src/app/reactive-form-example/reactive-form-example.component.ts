import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

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

  personalInfo = this.fb.group({
    firstName: [''],
    lastName: [''],
    contactNumber: this.fb.control('')
   })


  formData;
  newValue: string;

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {

    this.name.valueChanges.subscribe((value) => {
        this.newValue = value;
    })

  }

  changeValue() {
    this.name.setValue('Red')
  }

  onSubmit(value) {
    if(value) {
      this.formData = this.personalInfo.value;
    } else {
      this.formData = this.loginInfo.value;
    }
  }
}
