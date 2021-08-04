import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-body',
  templateUrl: './nav-body.component.html',
  styleUrls: ['./nav-body.component.scss']
})
export class NavBodyComponent implements OnInit {
  @Input() index: string;

  _isActive = false;
  set isActive(_isActive){
    this._isActive = _isActive;
    this.cd.detectChanges();
  }

  get isActive(){
    return this._isActive;
  }

  constructor(private  readonly cd: ChangeDetectorRef) { }

  ngOnInit(): void {}

}
