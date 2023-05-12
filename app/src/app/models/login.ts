import { JwtHelperService } from "@auth0/angular-jwt";
import { PortalMeliService } from "../services/portal-meli.service";
import { Role } from "./role";
import { Route } from "./route";

export class Login {

  id!: number;
  name!: string;
  email!: string;
  created_at!: Date;
  roles!: Role[];
  password: string = '';
  token: any;

  private static usuario: Login;

  private constructor() { }

  public static GetInstanceMe(service: PortalMeliService) {
    if (this.usuario == undefined) {
      this.usuario = new Login();
    }


    return this.usuario;
  }

  public static GetInstance() {
    if (this.usuario == undefined) {
      this.usuario = new Login();
    }

    return this.usuario;

  }

  public static GetUsuario(): any {

    return localStorage.getItem('user');
  }

  public static SetScroll(number: any): any {

    localStorage.setItem('scrol', number);
  }

  public static getScroll(): any {

    return localStorage.getItem('scrol');
  }


  public SetToken(token: any) {
    localStorage.setItem('token', token.access_token);
    this.name = token.name;
    this.email = token.email;
    localStorage.setItem('user', this.email);
  }


  public GetToken(): Login {
    this.token = localStorage.getItem('token');
    return this;
  }

  public DecodedToken() {
    var jwtdecode = new JwtHelperService();
    return jwtdecode.decodeToken(this.token);
  }

}
