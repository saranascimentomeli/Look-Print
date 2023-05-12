import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Role } from 'src/app/models/role';
import { User } from 'src/app/models/user';
import Swal from 'sweetalert2';
import { GerenciamentoUsuarioService } from '../../service/gerenciamento-usuario.service';
import { AddRoleComponent } from '../add-role/add-role.component';
import { UserRouteComponent } from '../user-route/user-route.component';

@Component({
  selector: 'app-user-role',
  templateUrl: './user-role.component.html',
  styleUrls: ['./user-role.component.css']
})
export class UserRoleComponent implements OnInit {

  user! : User;
  displayedColumns: string[] = ['role', 'created_at', 'action'];

  constructor(private service : GerenciamentoUsuarioService, @Inject(MAT_DIALOG_DATA) public data : User, public dialogRef : MatDialogRef<UserRoleComponent>, private dialog : MatDialog) { }

  ngOnInit(): void {

    this.user = this.data;
  }

  OpenRotas(role : Role) {

    this.dialog.open(UserRouteComponent, {

      data : role,
      width : '80%'
    });
  }

  DeleteRole(role : Role){

    let index = this.user.roles.indexOf(role);

    this.user.roles.splice(index, 1);
    this.service.DeleteRoleFromUser(this.user).subscribe((x)=>{

      Swal.fire({

        text : 'Deletado com sucesso',
        icon : 'success'
      })
    })

    this.dialogRef.close();
  }

  AddRole(user : User){

    this.dialog.open(AddRoleComponent, {

      data : user
    }).afterClosed().subscribe((x : Role[]) => {

      this.user.roles = x;
    });
  }

}
