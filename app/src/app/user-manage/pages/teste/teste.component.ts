import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { webSocket } from "rxjs/webSocket";
import { Moviment } from 'src/app/models/moviment';
import { interval } from 'rxjs';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {

  response: Moviment[] = [];

  user: string = 'Camila Ferreira Bernadino Leandro'

  subject = webSocket('ws://localhost:8765/');

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.subject.subscribe((msg: any) => {

      if (this.response.find(x => x.address_to == msg.address_to) != undefined) {

        let handle = this.response.find(x => x.address_to == msg.address_to);
        if (handle == undefined)
          return

        if (handle.transfer_document_id == msg.transfer_document_id) {
          handle.title = this.user + " esta parado aqui : " + handle.address_to;
          return
        }
        handle.title = this.user + " esta armazenando itens aqui : " + handle.address_to;
        return
      }
      msg.title = msg.address_to;
      this.response.push(msg);
      console.log(msg)
    });

    interval(5000).subscribe(x => {

      this.subject.next(this.user);
    });
  }
}
