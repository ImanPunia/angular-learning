import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-example',
  templateUrl: './reactive-form-example.component.html',
  styleUrls: ['./reactive-form-example.component.scss']
})
export class ReactiveFormExampleComponent implements OnInit {

  name = new FormControl();

  loginInfo = new FormGroup({
    userName : new FormControl('',Validators.required),
    password : new FormControl('')
  })

  personalInfo = this.fb.group({
    firstName: ['',Validators.maxLength(5)],
    lastName: [''],
    contactNumber: this.fb.control('')
   })


  formData;
  newValue: string;

   get firstName() {return this.personalInfo.controls.firstName;}

   get lastName() {return this.personalInfo.get('lastName');}



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
