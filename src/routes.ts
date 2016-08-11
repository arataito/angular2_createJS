/// <reference path="../typings/index.d.ts"/>

import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, RouterConfig} from '@angular/router';
import {Main} from './app/main';
import {Top} from './app/main/top/top';
import {Header} from './app/header';
import {Sidebar} from './app/sidebar/sidebar';
import {Createjs} from './app/main/createjs/createjs';

@Component({
  selector: 'root',
  template: `<Header></Header>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES, Header, Sidebar]
})
export class Root {
}

export const routes: RouterConfig = [
  {
    path: 'main',
    component: Main
  },
  {
    path: '',
    component: Top
  },
  {
    path: 'createjs',
    component: Createjs
  }
];
