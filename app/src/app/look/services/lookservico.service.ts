import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { impressora } from 'src/app/models/impressora';
import { Login } from 'src/app/models/login';
import { environment } from 'src/environments/environment';
import { bancadas } from 'src/app/models/bancadas';
import { tbatualizacao } from 'src/app/models/tbatualizacao';
import { layout } from 'src/app/models/layout';

@Injectable({
  providedIn: 'root'
})
export class LookservicoService {

  formData!: FormData;
  constructor(private http: HttpClient) { }

  CommonFormData() {
    this.formData = new FormData();
    this.formData.append('token', Login.GetInstance().GetToken().token);
  }

  GetLookImp() {
    this.CommonFormData();
    this.formData.append('cad', environment.cad);

    //return this.http.post<any>(environment.endpoint + 'sla/GetDados', this.formData);
    return this.http.post<any>(environment.endpoint + 'look/GetImpressora', this.formData);
  }

  GetLookGere() {
    this.CommonFormData();
    this.formData.append('cad', environment.cad);

    //return this.http.post<any>(environment.endpoint + 'sla/GetDados', this.formData);
    return this.http.post<any>(environment.endpoint + 'look/BuscarIP', this.formData);
  }

  SaveslookeImp(impressora: impressora) {

    impressora.cad = environment.cad;
    this.CommonFormData();
    this.formData.append('look', JSON.stringify(impressora));
    return this.http.post<any>(environment.endpoint + 'look/SaveImpressora', this.formData);
  }

  Deletelookimpe(sla: impressora) {

    this.CommonFormData();
    this.formData.append('look', JSON.stringify(sla));
    return this.http.post<any>(environment.endpoint + 'look/deleteImpressora', this.formData);
  }




  GetLookBancadas(layoutsel: string) {
    this.CommonFormData();
    this.formData.append('cad', environment.cad);
    this.formData.append('layout', layoutsel);
    //return this.http.post<any>(environment.endpoint + 'sla/GetDados', this.formData);
    return this.http.post<any>(environment.endpoint + 'look/GetBancadas', this.formData);
  }

  SaveslookeBancadas(bancadas: bancadas) {

    bancadas.Cad = environment.cad;
    this.CommonFormData();
    this.formData.append('bancada', JSON.stringify(bancadas));
    return this.http.post<any>(environment.endpoint + 'look/SaveBancada', this.formData);
  }

  DeletelookBancadas(bancadas: bancadas) {

    this.CommonFormData();
    this.formData.append('bancada', JSON.stringify(bancadas));
    return this.http.post<any>(environment.endpoint + 'look/deleteBancadas', this.formData);
  }

  GetAtualizacao(atualizar: tbatualizacao) {
    this.CommonFormData();
    this.formData.append('robo', atualizar.robo);
    this.formData.append('cad', atualizar.cad);

    return this.http.post<any>(environment.endpoint + 'lms/GetAtualizacao', this.formData);
  }

  savelayout(layout: layout) {
    layout.cad = environment.cad;
    this.CommonFormData();
    this.formData.append('layout', JSON.stringify(layout));

    return this.http.post<any>(environment.endpoint + 'look/savelayout', this.formData);
  }


  buscarLay() {
    this.CommonFormData();
    this.formData.append('cad', environment.cad);

    //return this.http.post<any>(environment.endpoint + 'sla/GetDados', this.formData);
    return this.http.post<any>(environment.endpoint + 'look/buscarLay', this.formData);
  }

  deleteLayout(layout: layout) {

    this.CommonFormData();
    this.formData.append('layout', JSON.stringify(layout));
    return this.http.post<any>(environment.endpoint + 'look/deleteLayout', this.formData);
  }

  UpdateBancada(bancadas: bancadas) {
    bancadas.Cad = environment.cad;
    bancadas.Usuario = Login.GetUsuario();
    this.CommonFormData();
    this.formData.append('bancada', JSON.stringify(bancadas));

    return this.http.post<any>(environment.endpoint + 'look/UpdateBancada', this.formData);
  }






}
