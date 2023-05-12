import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManageRoutingModule } from './user-manage-routing.module';
import { GerenciamentoUsuarioComponent } from './pages/gerenciamento-usuario/gerenciamento-usuario.component';
import { MatCardModule } from '@angular/material/card';

import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { UserRoleComponent } from './pages/user-role/user-role.component';
import { MatMenuModule } from '@angular/material/menu';
import { UserRouteComponent } from './pages/user-route/user-route.component';
import { AddRoleComponent } from './pages/add-role/add-role.component';
import { NewUserComponent } from './pages/new-user/new-user.component';
import { TesteComponent } from './pages/teste/teste.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableExporterModule } from 'mat-table-exporter';

@NgModule({
  declarations: [
    GerenciamentoUsuarioComponent,
    UserRoleComponent,
    UserRouteComponent,
    AddRoleComponent,
    NewUserComponent,
    TesteComponent
  ],
  imports: [
    CommonModule,
    UserManageRoutingModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatIconModule,
    MatMenuModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableExporterModule
  ]
})
export class UserManageModule { }
