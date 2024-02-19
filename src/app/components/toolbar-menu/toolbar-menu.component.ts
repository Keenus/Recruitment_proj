import { Component } from '@angular/core';
import {IsMobileService} from "../../services/isMobile/is-mobile.service";

@Component({
  selector: 'app-toolbar-menu',
  templateUrl: './toolbar-menu.component.html',
  styleUrls: ['./toolbar-menu.component.scss']
})
export class ToolbarMenuComponent {

  isMobile$: boolean = false;

  menuItems = [
    {name: 'Osiągnięcia', path: '/achievements'},
    {name: 'Przemiany', path: '/transformations'},
    {name: 'Galeria', path: '/gallery'},
    {name: 'O mnie', path: '/about'},
    {name: 'Umów trening', path: '/book-training'},
    {name: 'Kontakt', path: '/contact'},
  ];

  constructor(
    private isMobile: IsMobileService
  ) {
    this.isMobile.isMobile$.subscribe((data) => {
      console.log(data);
      this.isMobile$ = data;
    });
  }

}
