import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'pi pi-home', routerLink: "/" },
      { label: 'Counter', icon: 'pi pi-plus', routerLink: "/counter" },
      { label: 'Fetch Data', icon: 'pi pi-th-large', routerLink: "/fetch-data" }
    ];
  }

}
