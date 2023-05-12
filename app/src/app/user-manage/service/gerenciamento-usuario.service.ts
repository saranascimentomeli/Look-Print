import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from 'src/app/models/login';
import { Role } from 'src/app/models/role';
import { User } from 'src/app/models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GerenciamentoUsuarioService {

  formData! : FormData;

  constructor(private http : HttpClient) { }

  CommonFormData(){
    this.formData = new FormData();
    this.formData.append('token', Login.GetInstance().GetToken().token);
  }

  GetUsers(){

    this.CommonFormData();
    return this.http.post<any>(environment.endpoint + 'userManage/GetUsers', this.formData);
  }

  GetRolesFromUserByAdd(user : User){

    this.CommonFormData();
    this.formData.append('user', user.id.toString());
    return this.http.post<any>(environment.endpoint + 'userManage/GetAllPermissionToGrante', this.formData);
  }

  SaveRoles(roles : Role[], user : User){

    this.CommonFormData();
    this.formData.append('user', JSON.stringify(user));
    this.formData.append('roles', JSON.stringify(roles));
    return this.http.post<any>(environment.endpoint + 'userManage/SaveAllPermissionToGrante', this.formData);
  }

  DeleteRoleFromUser(user : User){

    this.CommonFormData();
    this.formData.append('user', user.id.toString());
    this.formData.append('roles', JSON.stringify(user.roles));
    return this.http.post<any>(environment.endpoint + 'userManage/ChangePermission', this.formData);
  }

  SaveUser(user : User){

    this.CommonFormData();
    this.formData.append('user', JSON.stringify(user));
    return this.http.post<any>(environment.endpoint + 'userManage/SaveUser', this.formData);
  }
}
