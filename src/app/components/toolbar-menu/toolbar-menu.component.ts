import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-toolbar-menu',
  templateUrl: './toolbar-menu.component.html',
  styleUrls: ['./toolbar-menu.component.scss']
})
export class ToolbarMenuComponent {

  @HostListener('window:scroll', ['$event'])

  onWindowScroll() {
    this.isScrolled = window.scrollY > 10;
  }
  constructor() {
    this.isScrolled = window.scrollY > 10;
  }

  isScrolled = false;

  menuItems = [
    {name: 'Osiągnięcia', path: '/achievements'},
    {name: 'Przemiany', path: '/transformations'},
    {name: 'Galeria', path: '/gallery'},
    {name: 'O mnie', path: '/about'},
    {name: 'Umów trening', path: '/book-training'},
    {name: 'Kontakt', path: '/contact'},
  ];

}
