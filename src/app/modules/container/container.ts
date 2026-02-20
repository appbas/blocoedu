import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './components/menu/menu';
import { LightDarkMode } from '../../shared/components/light-dark-mode/light-dark-mode';

@Component({
  selector: 'app-container',
  imports: [Menu, RouterOutlet, LightDarkMode],
  templateUrl: './container.html',
  styleUrl: './container.scss',
})
export default class Container {

}
