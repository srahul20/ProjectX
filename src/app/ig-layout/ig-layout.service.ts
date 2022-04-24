import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {MediaMatcher} from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root'
})
export class IgLayoutService {

  private sideNav: MatSidenav;

  private media: MediaMatcher;

  constructor(media: MediaMatcher) {
    this.media = media;
  }

  public setSideNav(sidenav: MatSidenav) {
    this.sideNav = sidenav;
  }

  public openSideNav() {
    return this.sideNav.open();
  }

  public closeSideNav() {
    return this.sideNav.close();
  }

  public toggleSideNav(): void {
    this.sideNav.toggle();
  }

  public getMediaQueryForMobile(): MediaQueryList {
    return this.media.matchMedia('(max-width: 600px)');
  }


}
