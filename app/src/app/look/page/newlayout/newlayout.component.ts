import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { layout } from 'src/app/models/layout';
import Swal from 'sweetalert2';
import { LookservicoService } from '../../services/lookservico.service';

@Component({
  selector: 'app-newlayout',
  templateUrl: './newlayout.component.html',
  styleUrls: ['./newlayout.component.css'],
  providers: [layout]
})
export class NewlayoutComponent implements OnInit {

  constructor(private service: LookservicoService, public layout: layout, private dialogRef: MatDialogRef<NewlayoutComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  imagem!: File;
  ngOnInit(): void {

    if (this.data != undefined)
      this.layout = this.data;
  }

  selecionarArquivo(event: any) {
    this.imagem = event.target.files[0];
  }

  excluir() {
    Swal.fire({
      title: 'Tem certeza?',
      text: 'Você deseja excluir este layout?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, excluir',
      cancelButtonText: 'Não, cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        // Se o usuário confirmou, chama a função DeletelookBancadas()
        this.service.deleteLayout(this.layout).subscribe((x) => {
          Swal.fire({
            text: 'Excluido com sucesso',
            icon: 'success',
            timer: 2000
          });
          this.dialogRef.close('ok');
        });
      }
    });
  }

  upload() {
    console.log(this.imagem);
    if (this.layout.descricao && this.imagem && (this.imagem.type === 'image/jpeg' || this.imagem.type === 'image/png')) {
      const reader = new FileReader();
      reader.readAsDataURL(this.imagem);

      reader.onload = () => {
        const base64Img = reader.result?.toString().split(',')[1];


        // console.log(base64Img);
        this.layout.descricao = this.layout.descricao;
        this.layout.layoutFoto = base64Img ?? '';

        this.service.savelayout(this.layout).subscribe(
          (response) => {
            Swal.fire({
              text: 'Salvo com sucesso',
              icon: 'success',
              timer: 2000
            });
            this.dialogRef.close('ok');

          },
          (error) => {
            Swal.fire({
              text: 'Ocorreu um erro ao salvar o layout',
              icon: 'error',
              timer: 2000
            });
            this.dialogRef.close('nok');
          }
        );
      };
    } else {
      if (!this.layout.descricao) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Por favor, insira uma descrição',
        });
      } else if (!this.imagem) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Por favor, selecione uma imagem',
        });
      } else if (this.imagem.type !== 'image/jpeg' && this.imagem.type !== 'image/png') {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Formato de imagem inválido. Por favor, selecione uma imagem em formato JPEG ou PNG.',
        });

      }
    }
  }

  editar() {

    if (this.layout.descricao && this.layout.layoutFoto) {

      this.service.savelayout(this.layout).subscribe(
        (response) => {
          Swal.fire({
            text: 'Salvo com sucesso',
            icon: 'success',
            timer: 2000
          });
          this.dialogRef.close('ok');

        },
        (error) => {
          Swal.fire({
            text: 'Ocorreu um erro ao salvar o layout',
            icon: 'error',
            timer: 2000
          });
          this.dialogRef.close('nok');
        }
      );

    } else {
      if (!this.layout.descricao) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Por favor, insira uma descrição',
        });
      } else if (!this.layout.layoutFoto) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Por favor, selecione uma imagem',
        });
      }

    }
  }

}


