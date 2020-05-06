import {Component, OnInit} from '@angular/core';
import {assetUrl} from "../single-spa/asset-url";
import {ExampleService} from "./service/example.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  public readonly title = 'area-design';
  public pokemones$: any;
  constructor(private readonly exampleService: ExampleService) {
  }
  ngOnInit(): void {
    this.pokemones$ = this.exampleService.doFetch();
  }
}
