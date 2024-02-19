import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class IsMobileService {

  private isMobileSubject = new BehaviorSubject<boolean>(false);
  isMobile$: Observable<boolean> = this.isMobileSubject.asObservable();

  breakpoint = 768;
  innerWidth: number;

  constructor() {
    window.addEventListener('resize', () => {
      if (window.innerWidth < this.breakpoint && this.innerWidth >= this.breakpoint) {
        this.innerWidth = window.innerWidth;
        this.isMobileSubject.next(true);
      } else if (window.innerWidth >= this.breakpoint && this.innerWidth < this.breakpoint) {
        this.innerWidth = window.innerWidth;
        this.isMobileSubject.next(false);
      }
    })

    if (window.innerWidth < this.breakpoint) {
      this.innerWidth = window.innerWidth;
      this.isMobileSubject.next(true);
    } else {
      this.innerWidth = window.innerWidth;
      this.isMobileSubject.next(false);
    }
  }
}
