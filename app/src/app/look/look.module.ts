import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LookRoutingModule } from './look-routing.module';
import { CadastroimpressoraComponent } from './page/cadastroimpressora/cadastroimpressora.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableExporterModule } from 'mat-table-exporter';
import { NewimpressoraComponent } from './page/newimpressora/newimpressora.component';
import { DeleteimpressoraComponent } from './page/deleteimpressora/deleteimpressora.component';
import { GerenciamentoimpressoraComponent } from './page/gerenciamentoimpressora/gerenciamentoimpressora.component';
import { ListaimpressoraComponent } from './page/listaimpressora/listaimpressora.component';
import { MatDividerModule } from '@angular/material/divider';
import { MapaEmpressorasComponent } from './page/mapa-empressoras/mapa-empressoras.component';
import { CadastrobancadaComponent } from './page/cadastrobancada/cadastrobancada.component';
import { NewbancadaComponent } from './page/newbancada/newbancada.component';
import { DeletebancadaComponent } from './page/deletebancada/deletebancada.component';
import { NewlayoutComponent } from './page/newlayout/newlayout.component';


@NgModule({
  declarations: [
    CadastroimpressoraComponent,
    NewimpressoraComponent,
    DeleteimpressoraComponent,
    GerenciamentoimpressoraComponent,
    ListaimpressoraComponent,
    MapaEmpressorasComponent,
    CadastrobancadaComponent,
    NewbancadaComponent,
    DeletebancadaComponent,
    NewlayoutComponent
  ],
  imports: [
    CommonModule,
    LookRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatMenuModule,
    MatMenuModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableExporterModule,
    MatDividerModule


  ]
})
export class LookModule { }
