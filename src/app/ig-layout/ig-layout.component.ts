import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'ig-layout',
  templateUrl: './ig-layout.component.html',
  styleUrls: ['./ig-layout.component.css']
})
export class IgLayoutComponent implements OnInit {

  navItems:any[] = [{'name':'Dashboard','routerLink':'admin/dashboard'},
  {'name':'Projects','routerLink':'admin/project'},
  {'name':'Team','routerLink':'admin/projects'},
  {'name':'Report','routerLink':'admin/dashboards'},
  {'name':'Component','routerLink':'admin/dashboardss'}]
  hideMobileMenu:boolean = false
  constructor() { }

  ngOnInit() {
  }

}
