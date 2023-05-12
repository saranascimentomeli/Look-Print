import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ExportType, MatTableExporterDirective } from 'mat-table-exporter';
import { bancadas } from 'src/app/models/bancadas';
import { LookservicoService } from '../../services/lookservico.service';
import { DeletebancadaComponent } from '../deletebancada/deletebancada.component';
import { NewbancadaComponent } from '../newbancada/newbancada.component';

@Component({
  selector: 'app-cadastrobancada',
  templateUrl: './cadastrobancada.component.html',
  styleUrls: ['./cadastrobancada.component.css'],
  providers: [bancadas]
})
export class CadastrobancadaComponent implements OnInit {

  dataSource!: MatTableDataSource<bancadas>;
  pesquisar!: string;
  bancadasgeral!: bancadas[];
  displayedColumns: string[] = ['id', 'Layout', 'Bancada', 'action'];



  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTableExporterDirective, { static: true }) exporter!: MatTableExporterDirective;


  constructor(private service: LookservicoService, public dialog: MatDialog, private bancadas: bancadas) { }

  ngOnInit(): void {

    this.Caregarbase();
  }

  exportIt() {
    this.exporter.exportTable(ExportType.CSV, {
      fileName: "Colaborador",
      Props: {
        Author: "Renan"
      }
    });
  }

  Caregarbase() {
    // this.service.GetLookBancadas().subscribe((x) => {

    //   this.bancadasgeral = x;
    //   this.dataSource = new MatTableDataSource(this.bancadasgeral);
    //   this.ngAfterViewInit();
    // });


  }

  deleteCOntroller(bancadas: bancadas) {
    this.dialog.open(DeletebancadaComponent, {

      data: bancadas
    }).afterClosed().subscribe((x: bancadas) => {
      this.Caregarbase();
    });
  }

  UserController(bancadas: any = null) {

    this.dialog.open(NewbancadaComponent, {

      data: bancadas
    }).afterClosed().subscribe((x: bancadas[]) => {

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
