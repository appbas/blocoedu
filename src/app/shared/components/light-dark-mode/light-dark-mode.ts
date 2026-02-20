import { isPlatformBrowser } from '@angular/common';
import { afterNextRender, Component, DOCUMENT, effect, inject, PLATFORM_ID, signal } from '@angular/core';
import { LightDarkService } from './light-dark.service';

@Component({
  selector: 'app-light-dark-mode',
  imports: [],
  templateUrl: './light-dark-mode.html',
  styleUrl: './light-dark-mode.scss',
})
export class LightDarkMode {

  #lightDarkService = inject(LightDarkService);
  isDarkMode = this.#lightDarkService.isDarkMode;

  toggleTheme() {
    this.#lightDarkService.toggleTheme();
  }

}
