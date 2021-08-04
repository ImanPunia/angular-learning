import { AfterViewInit, ChangeDetectorRef, Component, ContentChildren, Input, OnInit } from '@angular/core';
import { NavBodyComponent } from '../nav-body/nav-body.component';
import { NavTabComponent } from '../nav-tab/nav-tab.component';
import { NavigationService } from 'app/services/navigation.service';

@Component({
  selector: 'app-nav-parent',
  templateUrl: './nav-parent.component.html',
  styleUrls: ['./nav-parent.component.scss']
})
export class NavParentComponent implements OnInit, AfterViewInit {

  @Input() activeTab ;
  @ContentChildren(NavTabComponent) tabChildren!: NavTabComponent[];
  @ContentChildren(NavBodyComponent) BodyChildren!: NavBodyComponent[];

  constructor(private readonly navSer:  NavigationService) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void{
    this.navSer.registerNavTabs(this.tabChildren);
    this.navSer.registerNavBody(this.BodyChildren);
    this.navSer.setDefaultActiveTab();
  }

 

}
