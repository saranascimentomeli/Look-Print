import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ExportType, MatTableExporterDirective } from 'mat-table-exporter';
import { Login } from 'src/app/models/login';
import { User } from 'src/app/models/user';
import { GerenciamentoUsuarioService } from '../../service/gerenciamento-usuario.service';
import { NewUserComponent } from '../new-user/new-user.component';
import { UserRoleComponent } from '../user-role/user-role.component';

@Component({
  selector: 'app-gerenciamento-usuario',
  templateUrl: './gerenciamento-usuario.component.html',
  styleUrls: ['./gerenciamento-usuario.component.css'],
  providers: [User]
})
export class GerenciamentoUsuarioComponent implements OnInit {

  users!: User[];
  displayedColumns: string[] = ['Username', 'Email', 'Criado em', 'action'];
  dataSource!: MatTableDataSource<User>;
  pesquisar!: string;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTableExporterDirective, { static: true }) exporter!: MatTableExporterDirective;


  constructor(private service: GerenciamentoUsuarioService, public dialog: MatDialog, private user: User) { }

  ngOnInit(): void {

    this.Caregarbase();
  }

  Caregarbase() {
    this.service.GetUsers().subscribe((x) => {
      this.users = x;
      this.dataSource = new MatTableDataSource(this.users);
      this.ngAfterViewInit();

      console.log(x);
    })
  }


  exportIt() {
    this.exporter.exportTable(ExportType.CSV, {
      fileName: "Usuarios",
      Props: {
        Author: "Renan"
      }
    });
  }

  EmmitRowClick(item: User) {

    this.dialog.open(UserRoleComponent, {

      data: item,
      width: '80%'
    });
  }

  Delete(user: User) {


  }

  UserController(user: any = null) {

    this.dialog.open(NewUserComponent, {

      data: user
    }).afterClosed().subscribe((x: User[]) => {

      this.Caregarbase();
    });
  }


  applyFilter() {
    //this.pesquisar = this.pesquisar.trim(); // Remove whitespace
    this.pesquisar = this.pesquisar.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = this.pesquisar;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
