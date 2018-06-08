import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";


import { AppComponent } from "./app.component";
import { CoreModule } from "./modules/core/core.module";
import { CoreComponent } from './demo/core/core.component';
import { AccordionModule } from './modules/accordion/accordion.module';


@NgModule({
  declarations: [
    AppComponent,
    CoreComponent
  ],
  imports: [
    BrowserModule,
    CoreModule.forRoot(),
    AccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
