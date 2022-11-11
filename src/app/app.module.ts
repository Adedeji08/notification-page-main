import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NitificationsComponent } from './nitifications/nitifications.component';
import { NotificationCardsComponent } from './notification-cards/notification-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    NitificationsComponent,
    NotificationCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
