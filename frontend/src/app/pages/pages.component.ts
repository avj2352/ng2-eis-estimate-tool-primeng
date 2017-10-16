import {Component, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import {MenuItem} from "primeng/primeng";
import {Menu} from "primeng/components/menu/menu";
import {ActivatedRoute, Router} from "@angular/router";

declare var jQuery :any;

@Component({
  selector: 'pages-root',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit, AfterViewInit {

  menuItems: MenuItem[];
  miniMenuItems: MenuItem[];

  @ViewChild('bigMenu') bigMenu : Menu;
  @ViewChild('smallMenu') smallMenu : Menu;

  constructor(private router : Router) {

  }

  ngOnInit() {

    let handleSelected = function(event) {
      let allMenus = jQuery(event.originalEvent.target).closest('ul');
      let allLinks = allMenus.find('.menu-selected');

      allLinks.removeClass("menu-selected");
      let selected = jQuery(event.originalEvent.target).closest('a');
      selected.addClass('menu-selected');
    }

    this.menuItems = [
      {label: 'All Times', icon: 'fa-home', routerLink: ['/pages/alltimes'], command: (event) => handleSelected(event)},
      {label: 'Dashboard', icon: 'fa-calendar', routerLink: ['/pages/dashboard'], command: (event) => handleSelected(event)},
      {label: 'My Timesheet', icon: 'fa-clock-o', routerLink: ['/pages/timesheet'], command: (event) => handleSelected(event)},
      {label: 'Add Project', icon: 'fa-tasks', routerLink: ['/pages/projects'], command: (event) => handleSelected(event)},
      {label: 'My Profile', icon: 'fa-users', routerLink: ['/pages/profile'], command: (event) => handleSelected(event)},
      {label: 'Settings', icon: 'fa-sliders', routerLink: ['/pages/settings'], command: (event) => handleSelected(event)},
    ]

    this.miniMenuItems = [];
    this.menuItems.forEach( (item : MenuItem) => {
      let miniItem = { icon: item.icon, routerLink: item.routerLink }
      this.miniMenuItems.push(miniItem);
    })

  }

  selectInitialMenuItemBasedOnUrl() {
    let path = document.location.pathname;
    let menuItem = this.menuItems.find( (item) => { return item.routerLink[0] == path });
    if (menuItem) {
      let selectedIcon = this.bigMenu.container.querySelector(`.${menuItem.icon}`);
      jQuery(selectedIcon).closest('li').addClass('menu-selected');
    }
  }

  ngAfterViewInit() {
    this.selectInitialMenuItemBasedOnUrl();
  }

}//end:class-PagesComponent
