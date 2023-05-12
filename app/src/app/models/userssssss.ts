import { JwtHelperService } from "@auth0/angular-jwt";

export class userssssss {

  username: string = '';
  password: string = '';
  token: any;
  appVersion: any;

  private static usuario: userssssss;

  private constructor() { }

  public static GetInstance() {
    if (this.usuario == undefined) {
      this.usuario = new userssssss();
    }
    return this.usuario;
  }

  public SetToken(v: string) {
    localStorage.setItem('token', v);
  }


  public GetToken(): userssssss {
    this.token = localStorage.getItem('token');
    return this;
  }

  public DecodedToken() {
    var jwtdecode = new JwtHelperService();
    return jwtdecode.decodeToken(this.token);
  }

}
