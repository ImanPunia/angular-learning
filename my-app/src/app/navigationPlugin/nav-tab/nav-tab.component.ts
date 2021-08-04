import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { NavigationService } from 'app/services/navigation.service';

@Component({
  selector: 'app-nav-tab',
  templateUrl: './nav-tab.component.html',
  styleUrls: ['./nav-tab.component.scss']
})
export class NavTabComponent implements OnInit {
  @Input() index: string;

  _isActive =  false;
  set isActive(_isActive){
    this._isActive = _isActive;
    this.cd.detectChanges();
  }

  get isActive(){
    return this._isActive;
  }

  constructor(private readonly navSer:  NavigationService,
    private readonly cd: ChangeDetectorRef) { }

  ngOnInit(): void { }

  showNavBody(){
    this.navSer.switchNavPage(this.index);
  }

}
