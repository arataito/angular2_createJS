import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
@Component({
  selector: 'Sidebar',
  template: require('./sidebar.html'),
  directives: [ROUTER_DIRECTIVES]
})
export class Sidebar {}
