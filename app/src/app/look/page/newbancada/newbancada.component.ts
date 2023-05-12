import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { bancadas } from 'src/app/models/bancadas';
import Swal from 'sweetalert2';
import { LookservicoService } from '../../services/lookservico.service';

@Component({
  selector: 'app-newbancada',
  templateUrl: './newbancada.component.html',
  styleUrls: ['./newbancada.component.css'],
  providers: [bancadas]
})
export class NewbancadaComponent implements OnInit {

  constructor(private service: LookservicoService, public bancadas: bancadas, private dialogRef: MatDialogRef<NewbancadaComponent>, @Inject(MAT_DIALOG_DATA) private data: bancadas) { }

  ngOnInit(): void {

    if (this.data != undefined)
      this.bancadas = this.data;
  }

  SalvarUser() {
    console.log(this.bancadas);
    this.service.SaveslookeBancadas(this.bancadas).subscribe((x) => {

      Swal.fire({

        text: 'Salvo com sucesso',
        icon: 'success',
        timer: 2000
      });

      this.dialogRef.close(this.bancadas);
    })
  }


  confirmarExclusao() {
    Swal.fire({
      title: 'Tem certeza?',
      text: 'Você deseja excluir essa bancada?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, excluir',
      cancelButtonText: 'Não, cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        // Se o usuário confirmou, chama a função DeletelookBancadas()
        this.service.DeletelookBancadas(this.bancadas).subscribe((x) => {
          Swal.fire({
            text: 'Excluido com sucesso',
            icon: 'success',
            timer: 2000
          });
          this.dialogRef.close(this.bancadas);
        });
      }
    });
  }

}
