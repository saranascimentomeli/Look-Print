import { JwtHelperService } from "@auth0/angular-jwt";
import { PortalMeliService } from "../services/portal-meli.service";
import { Role } from "./role";
import { Route } from "./route";

export class User {

  id!: number;
  name!: string;
  email!: string;
  password!: string;
  created_at!: Date;
  roles!: Role[];

}
