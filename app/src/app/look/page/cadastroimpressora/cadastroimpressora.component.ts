import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ExportType, MatTableExporterDirective } from 'mat-table-exporter';
import { bancadas } from 'src/app/models/bancadas';
import { LookservicoService } from '../../services/lookservico.service';
import { DeleteimpressoraComponent } from '../deleteimpressora/deleteimpressora.component';
import { NewimpressoraComponent } from '../newimpressora/newimpressora.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastroimpressora',
  templateUrl: './cadastroimpressora.component.html',
  styleUrls: ['./cadastroimpressora.component.css'],
  providers: [bancadas]
})
export class CadastroimpressoraComponent implements OnInit {

  qrcode: string = '';
  @ViewChild('qrcodeInput', { static: false }) qrcodeInput: any;
  leftBars: number[] = [1, 2];
  values1: number[] = [0, 50];
  CenterBars: number[] = [3, 4, 5, 6, 7, 8];
  values2: number[] = [80, 50, 70, 10, 25, 37];
  rightBars: number[] = [9, 10];
  values3: number[] = [40, 90];
  Values4: number[] =[1,2,3,4,5,6,7,8,9,10];

  constructor(private service: LookservicoService, public bancadas: bancadas) { }

  ngOnInit(): void {
    this.classeInput = 'input-imp';
  }

  ngAfterViewInit() {
    this.qrcodeInput.nativeElement.focus();
  }

  etapa: number = 1;
  etapaAtual: number = 1;
  codigoImpressora: string = '';
  codigoBancada: string = '';
  descricao: string = 'Insira o código QR da impressora';
  classeInput: string = 'input-imp';
  mostrarCodigoImpressora: boolean = false;
  swalVisible: boolean = false;


  proximaEtapa(event: any) {

    if (event.key === "Enter") {

      if (this.qrcode != null && this.qrcode != '') {
        if (this.etapa === 1) {
         
          // Se estivermos na primeira etapa, armazene o código da impressora e avance para a próxima etapa
          this.codigoImpressora = this.qrcode;
          this.etapa = 2;
          this.etapaAtual = 2;
          this.mostrarCodigoImpressora = true;
          this.qrcode = '';
          this.descricao = 'Insira o código QR da bancada';
          this.classeInput = 'input-banc';
          this.qrcodeInput.nativeElement.focus();
        } else if (this.etapa === 2) {
          
          // Se estivermos na segunda etapa, armazene o código da bancada e exiba a caixa de diálogo de confirmação
          this.codigoBancada = this.qrcode;
          this.swalVisible = true;
          this.bancadas.Bancada = this.codigoImpressora;
          this.bancadas.Impressora = this.codigoBancada;
          // Se o usuário confirmou, chama a função DeletelookBancadas()

          Swal.fire({
            title: 'Confirme as informações inseridas',
            html: `Código da impressora: ${this.codigoImpressora}<br>Código da bancada: ${this.codigoBancada}`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirmar',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.isConfirmed) {


              this.service.UpdateBancada(this.bancadas).subscribe((x) => {
                Swal.fire({
                  title: 'Sucesso!',
                  text: 'Os dados da bancada foram atualizados com sucesso.',
                  icon: 'success',
                  timer: 2000
                }).then((result) => {
                  // Se o usuário clicar em "OK", reinicie a etapa para a primeira etapa
                  if (result.isConfirmed) {
                    this.etapa = 1;
                    this.etapaAtual = 1;
                    this.mostrarCodigoImpressora = false;
                    this.qrcode = '';
                    this.descricao = 'Insira o código QR da impressora';
                    this.classeInput = 'input-imp';
                    this.swalVisible = false;
                    this.qrcodeInput.nativeElement.focus();
                  }
                });
              }, (error) => {
                Swal.fire({
                  title: 'Erro!',
                  text: 'Ocorreu um erro ao atualizar os dados da bancada.',
                  icon: 'error',
                  timer: 2000
                });

                this.etapa = 1;
                this.etapaAtual = 1;
                this.mostrarCodigoImpressora = false;
                this.qrcode = '';
                this.descricao = 'Insira o código QR da impressora';
                this.classeInput = 'input-imp';
                this.swalVisible = false;
                this.qrcodeInput.nativeElement.focus();
              });


            } else {
              this.swalVisible = false;
              this.etapa = 1;
              this.etapaAtual = 1;
              this.mostrarCodigoImpressora = false;
              this.qrcode = '';
              this.descricao = 'Insira o código QR da impressora';
              this.classeInput = 'input-imp';
              this.swalVisible = false;
              this.qrcodeInput.nativeElement.focus();
            }
          });
        }
      }
      else {
        // Swal.fire({
        //   title: 'Erro!',
        //   text: 'Campo Vazio',
        //   icon: 'error'
        // });
      }

    }

  }

  voltarEtapa() {
    this.etapa = 1;
    this.etapaAtual = 1;
    this.mostrarCodigoImpressora = false;
    this.descricao = 'Insira o código QR da impressora';
    this.classeInput = 'input-imp';
    this.qrcodeInput.nativeElement.focus();
  }


  getRandomDelay(bar: number): string {
    const random = Math.floor(Math.random() * 5000);
    const delay = bar * 200 + random;
    return `${delay}ms`;
  }




}



