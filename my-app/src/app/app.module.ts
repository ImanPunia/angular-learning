import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotifyComponent } from './notify/notification.component';
import { NotificationExampleComponent } from './notification-example/notification-example.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormExampleComponent } from './reactive-form-example/reactive-form-example.component';
import { ResuableControlsExampleComponent } from './resuable-controls-example/resuable-controls-example.component';
import { CustomInputComponentComponent } from './custom-input-component/custom-input-component.component';
import { EmojiRatingComponent } from './emoji-rating/emoji-rating/emoji-rating.component';
import { OddEvenBoxComponent } from './odd-even-number/odd-even-box/odd-even-box.component';
import { ContentProjectionComponent } from './content-projection/content-projection/content-projection.component';
import { ElementContentDirective } from './directives/element-content.directive';
import { ExpandCollapseComponent } from './expand-collapse/expand-collpase/expand-collapse.component';
import { CollapseComponent } from './expand-collapse/collapse/collapse.component';
import { ExpandComponent } from './expand-collapse/expand/expand.component';
import { ExpandCollapseActionComponent } from './expand-collapse/expand-collapse-action/expand-collapse-action.component';
import { HelperComponent } from './helper/helper.component';
import { ExpandCollapseDirective } from './directives/expand-collapse.directive';
import { ExpandCollapseMediumDirective } from './directives/expand-collapse-medium.directive';
import { ExpandCollapseMainComponent } from './expand-collapse-second/expand-collapse-main/expand-collapse-main.component';
import { ExpandCollapseOutsideComponent } from './helper/expand-collapse-outside/expand-collapse-outside.component';
import { ExpandCollapseParentComponent } from './expand-collapse-second/expand-collapse-parent/expand-collapse-parent.component';
import { NavParentComponent } from './navigationPlugin/nav-parent/nav-parent.component';
import { NavTabComponent } from './navigationPlugin/nav-tab/nav-tab.component';
import { NavBodyComponent } from './navigationPlugin/nav-body/nav-body.component';
@NgModule({
  declarations: [
    AppComponent,
    NotifyComponent,
    NotificationExampleComponent,
    ReactiveFormExampleComponent,
    ResuableControlsExampleComponent,
    CustomInputComponentComponent,
    EmojiRatingComponent,
    OddEvenBoxComponent,
    ContentProjectionComponent,
    ElementContentDirective,
    ExpandCollapseComponent,
    CollapseComponent,
    ExpandCollapseActionComponent,
    ExpandComponent,
    HelperComponent,
    ExpandCollapseDirective,
    ExpandCollapseMediumDirective,
    ExpandCollapseOutsideComponent,
    ExpandCollapseMainComponent,
    ExpandCollapseParentComponent,
    NavParentComponent,
    NavTabComponent,
    NavBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
