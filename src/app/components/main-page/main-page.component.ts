import { Component } from '@angular/core';
import {IsMobileService} from "../../services/isMobile/is-mobile.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  isMobile$: boolean = false;

  constructor(
    private isMobileService: IsMobileService
  ) {
    this.isMobileService.isMobile$.subscribe((data: boolean) => {
      this.isMobile$ = data;
    })
  }
}
