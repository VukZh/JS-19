import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyElementComponent } from './my-element/my-element.component';
import { MyLinkComponent } from './my-link/my-link.component';

@NgModule({
  declarations: [
    AppComponent,
    MyElementComponent,
    MyLinkComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
