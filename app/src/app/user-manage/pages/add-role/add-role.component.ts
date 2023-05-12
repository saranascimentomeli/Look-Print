import { Component, Inject, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Role } from 'src/app/models/role';
import { User } from 'src/app/models/user';
import Swal from 'sweetalert2';
import { GerenciamentoUsuarioService } from '../../service/gerenciamento-usuario.service';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {

  roles! : Role[];

  constructor(private service : GerenciamentoUsuarioService, @Inject(MAT_DIALOG_DATA) public data : User, public dialogRef : MatDialogRef<AddRoleComponent>) { }

  ngOnInit(): void {

    this.service.GetRolesFromUserByAdd(this.data).subscribe((x)=> {

      this.roles = x;
    })
  }

  onClick(){


  }

  RolesEscolhidas(event: MatCheckboxChange, role : Role){

    let index = this.roles.indexOf(role);

    if(event.checked){

      this.roles[index].user = this.data.id;
      return;
    }
    this.roles[index].user = 0;
  }

  Salvar(){

    this.service.SaveRoles(this.roles, this.data).subscribe((x) => {

      Swal.fire({

        text : 'Salvo com sucesso!',
        icon : 'success'
      });
      this.dialogRef.close(this.roles.filter(x => x.user > 0));
    });
  }

}
