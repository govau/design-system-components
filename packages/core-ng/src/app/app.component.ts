import {Component} from "@angular/core";
import {UiKitCoreService} from "./modules/core-ng/ui-kit-core.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";

  dropDownValues = UiKitCoreService.POSSIBLE_VALUES;

  dropDownValue = "light";


  onChange(value) {
    this.dropDownValue = value;
  };

}
