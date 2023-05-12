import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/models/user';
import Swal from 'sweetalert2';
import { GerenciamentoUsuarioService } from '../../service/gerenciamento-usuario.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
  providers: [User]
})
export class NewUserComponent implements OnInit {

  constructor(private service : GerenciamentoUsuarioService, public user : User, private dialogRef : MatDialogRef<NewUserComponent>, @Inject(MAT_DIALOG_DATA) private data : User) { }

  ngOnInit(): void {

    if(this.data != undefined)
      this.user = this.data;
  }

  SalvarUser(){

    console.log(this.user)
    this.service.SaveUser(this.user).subscribe((x) => {


      Swal.fire({

        text : 'Salvo com sucesso',
        icon : 'success',
        timer : 2000
      });

      this.dialogRef.close(this.user);
    })
  }

}
