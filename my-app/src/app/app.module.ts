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

@NgModule({
  declarations: [
    AppComponent,
    NotifyComponent,
    NotificationExampleComponent,
    ReactiveFormExampleComponent,
    ResuableControlsExampleComponent,
    CustomInputComponentComponent,
    EmojiRatingComponent
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
