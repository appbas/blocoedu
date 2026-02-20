import { isPlatformBrowser } from "@angular/common";
import { afterNextRender, DOCUMENT, effect, inject, Injectable, PLATFORM_ID, signal } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class LightDarkService {

 #document = inject(DOCUMENT);
  #platafformId = inject(PLATFORM_ID);

 isDarkMode = signal<boolean | null>(null);

 constructor() {
    effect(() => {
      this.#init();
    });
  }

  #initTheme(): void {
   if (isPlatformBrowser(this.#platafformId) && this.isDarkMode() === null) {
      const savedTheme = localStorage.getItem('theme');
      this.isDarkMode.set(savedTheme === 'dark');
      this.#document.body.setAttribute('data-theme', savedTheme ?? 'light');
   }
  }

  #init(): void {
   if (isPlatformBrowser(this.#platafformId) && this.isDarkMode() !== null) {
        const darkModeActive = this.isDarkMode();

        if (darkModeActive) {
          this.#document.body.setAttribute('data-theme', 'dark');
          localStorage.setItem('theme', 'dark');
        } else {
          this.#document.body.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
        }
      }
  }

  load(): void {
    this.#initTheme();
    this.#init();
  }

  toggleTheme() {
    this.isDarkMode.update(current => !current);
  }
    
}