import { Modulo } from "./modulo";
import { Route } from "./route";

export class Role {

    id! : number;
    descricao! : string;
    modulo! : Modulo;
    created_at! : string;
    updated_at! : string;
    user! : number;
    routes! : Route[];
}
