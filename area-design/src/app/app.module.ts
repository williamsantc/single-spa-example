import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {APP_BASE_HREF} from "@angular/common";
import {EmptyRouteComponent} from "./empty-route/empty-route.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ExampleService} from "./service/example.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }, ExampleService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log('booted')
  }
}
