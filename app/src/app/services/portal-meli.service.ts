import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class PortalMeliService {

  formData! : FormData;

  constructor(private httpCliente : HttpClient) { 
  }

  Login(user : Login){
    this.CommonFormData();
    this.formData.append('email', user.name);
    this.formData.append('password', user.password);

    return this.httpCliente.post<any>(environment.endpoint + "auth/login", this.formData);
  }

  CommonFormData(){
    this.formData = new FormData();
    this.formData.append('cad', environment.cad);
    this.formData.append('token', Login.GetInstance().GetToken().token);
  }

  GetRoutes(){

    this.CommonFormData();
    return this.httpCliente.post<any>(environment.endpoint + "auth/MeRoutes", this.formData);
  }

  GetMe(){

    this.CommonFormData();
    return this.httpCliente.post<any>(environment.endpoint + "auth/me", this.formData);
  }

  GetModulosFromUser(){

    
  }
}
