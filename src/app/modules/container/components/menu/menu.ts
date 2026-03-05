import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UserProfile } from '../user-profile/user-profile';
import { ContainerStore } from '../../container.store';

@Component({
  selector: 'app-menu',
  imports: [UserProfile, RouterLink, RouterLinkActive],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class Menu {

  #store = inject(ContainerStore);

  menuSelected(): void {
    this.#store.isMenuOpen.set(false);
  }

}
