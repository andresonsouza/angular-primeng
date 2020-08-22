import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'People',
        items: [{
          label: 'People',
          icon: 'pi pi-fw pi-user',
          routerLink: 'people'
        }
        ]
      },
      {
        label: 'Products',
        icon: 'pi pi-fw pi-user',
        routerLink: 'products'
       }
    ];
  }

}
