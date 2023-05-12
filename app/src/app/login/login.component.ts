import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Login } from '../models/login';
import { PortalMeliService } from '../services/portal-meli.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formCliente: any;
  status: string = '';
  usuario: Login;
  loginTitle: string = environment.cad;
  Cadselecionado: string = environment.cad;

  versao = environment.appVersion;

  constructor(private _formBuilder: FormBuilder, private loginService: PortalMeliService, private router: Router) {
    this.usuario = Login.GetInstance();
  }

  createForm() {

    this.formCliente = this._formBuilder.group({

      name: [this.usuario.name],
      passwd: [this.usuario.password]
    });
  }

  onChange(event: any) {
    console.log(event.target.value);
    this.loginTitle = event.target.value;
    environment.cad = event.target.value;
  }

  ngOnInit(): void {

    this.createForm();
  }

  login() {
    // this.tocarBeep();
    this.usuario.name = this.formCliente.get('name').value;
    this.usuario.password = this.formCliente.get('passwd').value;
    console.log(this.usuario.password);
    this.loginService.Login(this.usuario).subscribe((x) => {

      this.usuario.SetToken(x);
      this.router.navigate(['menu']);
    }, (err) => {

      console.log(err);
      this.status = 'User or password is wrong.';
    });
  }

  tocarBeep() {
    try {
      const audio = new Audio();
      audio.src = 'assets/call.mp3';
      audio.load();
      audio.play();
    } catch (error) {
      alert('Erro ao exibir notificação: ' + error);
    }
  }

}
