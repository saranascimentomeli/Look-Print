import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { bancadas } from 'src/app/models/bancadas';
import Swal from 'sweetalert2';
import { LookservicoService } from '../../services/lookservico.service';

@Component({
  selector: 'app-deletebancada',
  templateUrl: './deletebancada.component.html',
  styleUrls: ['./deletebancada.component.css'],
  providers: [bancadas]
})
export class DeletebancadaComponent implements OnInit {

  constructor(private service: LookservicoService, public bancadas: bancadas, private dialogRef: MatDialogRef<DeletebancadaComponent>, @Inject(MAT_DIALOG_DATA) private data: bancadas) { }

  ngOnInit(): void {
    if (this.data != undefined)
      this.bancadas = this.data;
  }

  CloseColab() {
    this.dialogRef.close();
  }

  deleteColab() {
    console.log(this.bancadas);
    this.service.DeletelookBancadas(this.bancadas).subscribe((x) => {

      Swal.fire({

        text: 'Salvo com sucesso',
        icon: 'success',
        timer: 2000
      });

      this.dialogRef.close(this.bancadas);
    })

  }

}
