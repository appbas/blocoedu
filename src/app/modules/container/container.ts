import { Component } from '@angular/core';
import { Menu } from './components/menu/menu';
import { UserProfile } from './components/user-profile/user-profile';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-container',
  imports: [Menu, UserProfile, RouterOutlet],
  templateUrl: './container.html',
  styleUrl: './container.scss',
})
export default class Container {

}
