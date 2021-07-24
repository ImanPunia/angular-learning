import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-input-component',
  templateUrl: './custom-input-component.component.html',
  styleUrls: ['./custom-input-component.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: CustomInputComponentComponent
  }]
})
export class CustomInputComponentComponent implements ControlValueAccessor {

  @ViewChild('input') inputEle: ElementRef; 
  @Input() placeholder: string;

  constructor() { }

  writeValue(obj: any): void {
    this.inputEle.nativeElement.value = obj;
  }

  registerOnChange(fn: any): void {
      this.onChange = fn;
  }

  registerOnTouched(fn: any): void {  }

  setDisabledState?(isDisabled: boolean): void { }

  onChange(value: string){
    console.log(value);
  }
  

}
