import { Component, effect, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LightDarkService } from '../../shared/components/light-dark-mode/light-dark.service';

@Component({
  selector: 'app-template',
  imports: [RouterOutlet],
  templateUrl: './template.html',
  styleUrl: './template.scss',
})
export class Template {

  #lightDarkService = inject(LightDarkService);
  isLoadingTheme = signal<boolean>(true);

  constructor() {
    this.#lightDarkService.load();
    effect(() => {
      this.isLoadingTheme.update(() => this.#lightDarkService.isDarkMode() === null);
    });
  }

}
