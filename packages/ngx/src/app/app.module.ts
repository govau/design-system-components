import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";


import { AppComponent } from "./app.component";
import { CoreModule } from "./modules/core/core.module";
import { CoreComponent } from './demo/core/core.component';
import { AccordionModule } from './modules/accordion/accordion.module';
import {RouterModule, Routes} from '@angular/router';
import { AccordionComponent } from './demo/accordion/accordion.component';
import { TabsComponent } from './demo/tabs/tabs.component';
import { TabGroupComponent } from './modules/tab/au-tab-group/tab-group.component';
import { TabHeadingComponent } from './modules/tab/au-tab-heading/tab-heading.component';
import { TabBodyComponent } from './modules/tab/au-tab-body/tab-body.component';

const appRoutes: Routes = [
  { path: 'accordion', component: AccordionComponent },
  { path: 'core', component: CoreComponent },
  { path: '',
    redirectTo: '/core',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    AccordionComponent,
    TabsComponent,
    TabGroupComponent,
    TabHeadingComponent,
    TabBodyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    CoreModule.forRoot(),
    AccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
