import { Component, OnInit } from '@angular/core';
import { Route } from 'src/app/models/route';
import { PortalMeliService } from 'src/app/services/portal-meli.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems : Route[] | undefined;
  constructor(private service : PortalMeliService) { }

  ngOnInit(): void {

    this.Routes();
  }

  Routes(){

    this.service.GetRoutes().subscribe((x : Route[]) => {

      this.menuItems = x.filter(menuItem => menuItem);
    })
  }

  
}
