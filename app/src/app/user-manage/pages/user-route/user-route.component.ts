import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Role } from 'src/app/models/role';
import { Route } from 'src/app/models/route';

@Component({
  selector: 'app-user-route',
  templateUrl: './user-route.component.html',
  styleUrls: ['./user-route.component.css']
})
export class UserRouteComponent implements OnInit {

  role! : Role;
  routes! : Route
  displayedColumns: string[] = ['route', 'created_at', 'action'];

  constructor(@Inject(MAT_DIALOG_DATA) public data : Role, public dialogRef : MatDialogRef<UserRouteComponent>) { }

  ngOnInit(): void {

    console.log(this.data);
    this.role = this.data;
  }

  OpenRotas() {

  }

  Delete(route : Route){


  }

}
