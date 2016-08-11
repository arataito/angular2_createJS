import {Component} from '@angular/core';
import {Header} from './header';
import {Title} from './title';
import {Sidebar} from './sidebar/sidebar';

@Component({
  selector: 'App',
  template: require('./main.html'),
  directives: [Header, Title, Sidebar]
})
export class Main {}
