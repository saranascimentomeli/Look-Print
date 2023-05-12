import { Component, OnInit } from '@angular/core';
import { LookservicoService } from '../../services/lookservico.service';

@Component({
  selector: 'app-gerenciamentoimpressora',
  templateUrl: './gerenciamentoimpressora.component.html',
  styleUrls: ['./gerenciamentoimpressora.component.css']
})
export class GerenciamentoimpressoraComponent implements OnInit {

  serverInfo: number = 0;
  objetos: any;
  selecionado!: string;
  constructor(private service: LookservicoService) { }

  ngOnInit(): void {
    this.pesquisarNobanco();
    this.serverInfo = window.setInterval(() => {
      this.pesquisarNobanco();
    }, 3000);
  }


  ngAfterViewInit(): void {

    //this.inputElement.nativeElement.focus();
  }

  pesquisarNobanco() {

    this.service.GetLookGere().subscribe((x) => {
      this.objetos = x;

      console.log(this.objetos);
      //this.inputElement.nativeElement.focus();
    })
    //this.inputElement.nativeElement.focus();
  }

}
