import { Injectable } from '@angular/core';
import { NavBodyComponent } from 'app/navigationPlugin/nav-body/nav-body.component';
import { NavTabComponent } from 'app/navigationPlugin/nav-tab/nav-tab.component';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  navTabs:  NavTabComponent[] = [];
  navBody: NavBodyComponent[] = [];
  activeTab: NavTabComponent;
  activePage: NavBodyComponent;

  navChangeSubject: Subject<pageChange>  = new Subject<pageChange>();;
  
  constructor() { }

  registerNavTabs(tabs: NavTabComponent[]){
    tabs.forEach(tab => {
      this.navTabs.push(tab);
    });
  }

  registerNavBody(bodys: NavBodyComponent[]){
    bodys.forEach(body => {
      this.navBody.push(body);
    });
  }

  notifyNavChange(event: pageChange){
    this.navChangeSubject.next(event);
  }

  switchNavPage(index: string){
    let switched =  false;
    const oldTab = this.activeTab;
    const nextTab  = this.navTabs.find( e => e.index === index);
    const nextPageBody= this.navBody.find(e => e.index === index);

    if(nextTab && nextPageBody){
      switched = this.switch(nextTab,nextPageBody);

      if(switched){
        const pageChangeValue = new pageChange(oldTab.index, nextTab.index);
        this.notifyNavChange(pageChangeValue);
      }
    }

  }

  switch(nextTab: NavTabComponent,nextPage:NavBodyComponent): boolean{
    let switched = false;
    switched = this.switchTab(nextTab, switched);
    this.switchNavBody(nextPage);
    return switched;
  }

  switchTab(nextTab, switched: boolean):  boolean{
    if(this.activeTab !== nextTab){
      if(this.activeTab){
        this.activeTab.isActive = false;
      }
      nextTab.isActive =true;
      this.activeTab = nextTab;
      switched = true;
    }
    return switched;
  }

  switchNavBody(nextTabBody: NavBodyComponent){
    if(nextTabBody && nextTabBody !==  this.activePage){
      if(this.activePage){
        this.activePage.isActive  = false;

      }
      nextTabBody.isActive = true;
      this.activePage = nextTabBody;
    }
  }

  setDefaultActiveTab(){
    let switched = false;
    let defaultActiveTab = this.navTabs.find(e  => e.isActive);
    if(!defaultActiveTab){
      defaultActiveTab = this.navTabs[0];
    } 

    let defaultActivePage = this.navBody.find(e => e.index === defaultActiveTab.index);
    if(defaultActivePage){
      defaultActivePage = this.navBody[0];
    }

    if(defaultActiveTab){
      const oldTab = this.activeTab;

      switched = this.switch(defaultActiveTab,defaultActivePage);

      if(switched){
        const pageChangeValue = new pageChange(oldTab?oldTab.index: undefined, this.activeTab.index);
        this.notifyNavChange(pageChangeValue);
      }
    }
  }
}

export class pageChange{
  constructor(public oldIndex: string, public newIndex:string){}
}
