import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-emoji-rating',
  templateUrl: './emoji-rating.component.html',
  styleUrls: ['./emoji-rating.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EmojiRatingComponent),
      multi: true
    }
 
  ]
})
export class EmojiRatingComponent implements ControlValueAccessor {

  private _starValue: number;
  private _starData: String;
  private _value : ratingData;

  public get starData(): String {
    return this._starData;
  }

  @Input('publicRatings') ratingsData: ratingData[] ;

  onChange: any = () => {};
  onTouched: any = () => {};


  constructor() { }

  writeValue(value: any): void {
      this._value = value ;
  }

  registerOnChange(fn: any): void {
      this.onChange = fn
  }

  registerOnTouched(fn: any): void {
      this.onTouched = fn
  }

  selectRatings(star: ratingData){
      console.log(star.starValue);
      this._starData = star.starText;
      this._value = star;
      this._starValue = star.starValue
      this.onChange();
  }

  showRatingText(startText: String){
    this._starData = startText;
  }
}
