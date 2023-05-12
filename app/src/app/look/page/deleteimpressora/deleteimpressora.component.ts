import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { impressora } from 'src/app/models/impressora';
import Swal from 'sweetalert2';
import { LookservicoService } from '../../services/lookservico.service';

@Component({
  selector: 'app-deleteimpressora',
  templateUrl: './deleteimpressora.component.html',
  styleUrls: ['./deleteimpressora.component.css'],
  providers: [impressora]
})
export class DeleteimpressoraComponent implements OnInit {

  constructor(private service: LookservicoService, public impressora: impressora, private dialogRef: MatDialogRef<DeleteimpressoraComponent>, @Inject(MAT_DIALOG_DATA) private data: impressora) { }

  ngOnInit(): void {
    if (this.data != undefined)
      this.impressora = this.data;
  }


  CloseColab() {
    this.dialogRef.close();
  }

  deleteColab() {
    console.log(this.impressora);
    this.service.Deletelookimpe(this.impressora).subscribe((x) => {

      Swal.fire({

        text: 'Salvo com sucesso',
        icon: 'success',
        timer: 2000
      });

      this.dialogRef.close(this.impressora);
    })

  }

}
