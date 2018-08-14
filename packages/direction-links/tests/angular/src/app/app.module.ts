import { DirectionLinkModule } from './../../../../src/ts/direction-link.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DirectionLinkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
