import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotifyComponent } from './notify/notification.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { NotificationExampleComponent } from './notification-example/notification-example.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormExampleComponent } from './reactive-form-example/reactive-form-example.component';

@NgModule({
  declarations: [
    AppComponent,
    NotifyComponent,
    TextAreaComponent,
    NotificationExampleComponent,
    ReactiveFormExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
