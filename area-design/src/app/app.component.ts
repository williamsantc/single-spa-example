import { Component } from '@angular/core';
import {assetUrl} from "../single-spa/asset-url";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public readonly title = 'area-design';
}
