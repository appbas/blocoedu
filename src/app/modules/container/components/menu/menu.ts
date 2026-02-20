import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UserProfile } from '../user-profile/user-profile';

@Component({
  selector: 'app-menu',
  imports: [UserProfile, RouterLink, RouterLinkActive],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class Menu {

}
