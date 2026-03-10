import { Component, DOCUMENT, effect, ElementRef, inject, OnDestroy, OnInit, PLATFORM_ID, signal, viewChild } from '@angular/core';
import { Router, NavigationEnd, Event, RouterOutlet } from '@angular/router';
import { LightDarkMode } from '../../shared/components/light-dark-mode/light-dark-mode';
import { Logo } from './components/logo/logo';
import { Menu } from './components/menu/menu';
import { isPlatformBrowser } from '@angular/common';
import { ContainerStore } from './container.store';
import { filter } from 'rxjs';

@Component({
  selector: 'app-container',
  imports: [Menu, RouterOutlet, LightDarkMode, Logo],
  templateUrl: './container.html',
  styleUrls: ['./container.scss', './toggle-menu.scss'],
  viewProviders: [ContainerStore]
})
export default class Container implements OnInit, OnDestroy {

  #store = inject(ContainerStore);
  #query = '(max-width: 992px)';
  #mediaQueryList?: MediaQueryList;
  #platformId = inject(PLATFORM_ID);
  content = viewChild<ElementRef<HTMLDivElement>>('content');

  isMenuOpen = this.#store.isMenuOpen;

  #fnMediaQueryHandler = this.#mediaQueryHandler.bind(this);

  private router = inject(Router);

  constructor() {
    effect(() => {

      if (isPlatformBrowser(this.#platformId)) {
        if (this.isMenuOpen()) {
          this.content()?.nativeElement.classList.add('no-scroll');
        } else {
          this.content()?.nativeElement.classList.remove('no-scroll');
        }
        // this.content()?.nativeElement.scrollTo(0, 0);
      }
    });

    if (isPlatformBrowser(this.#platformId)) {
      this.router.events.pipe(
        filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
      ).subscribe((event: any) => {
        console.debug('Rota mudou para:', event.urlAfterRedirects);
        this.content()?.nativeElement.scrollTo(0, 0);
      });
    }
  }

  toggleMenu() {
    this.isMenuOpen.update(prev => !prev);
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.#platformId)) {
      this.#mediaQueryList = window.matchMedia(this.#query);

      this.#mediaQueryList.addEventListener('change', this.#fnMediaQueryHandler);
    }
  }

  #mediaQueryHandler(): void {
    if (this.isMenuOpen() && !this.#mediaQueryList?.matches) {
      this.isMenuOpen.set(false);
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.#platformId)) {
      this.#mediaQueryList?.removeEventListener('change', this.#fnMediaQueryHandler);
    }
  }

}
