import { Injectable, signal } from "@angular/core";

@Injectable()
export class ContainerStore {

 isMenuOpen = signal(false);

}