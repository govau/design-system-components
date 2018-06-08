import { Component } from "@angular/core";
import { UiKitCoreService } from "./modules/core/ui-kit-core.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: []
})
export class AppComponent {
  title = "app";

  dropDownValues = UiKitCoreService.POSSIBLE_VALUES;

  dropDownValue = "light";

  constructor(private uiKitCoreService: UiKitCoreService){
  }


  onChange(value) {
    this.dropDownValue = value;
    this.uiKitCoreService.setColorPalettes(value);
  }

}
