import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";
import {IconComponent} from "./components/icon/icon.component";
require("!style!css!sass!../scss/main.scss");
@Component({
  selector: 'my-app',
  template: require('./app.component.html'),
  styles: [require('./app.component.scss')],
  directives:[IconComponent]
})
export class AppComponent { }
