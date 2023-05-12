import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listaimpressora',
  templateUrl: './listaimpressora.component.html',
  styleUrls: ['./listaimpressora.component.css']
})
export class ListaimpressoraComponent implements OnInit {

  @Input() obj: any;
  constructor() { }

  ngOnInit(): void {
  }

}
