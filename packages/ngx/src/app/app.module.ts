import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";


import { AppComponent } from "./app.component";
import { CoreModule } from "./modules/core/core.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
