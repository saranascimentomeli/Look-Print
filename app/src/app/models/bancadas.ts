import { paradas } from "./paradas";


export class bancadas {

    id!: number;
    Layout!: string;
    Bancada!: string;
    Impressora!: string;
    CoordX!: number;
    CoordY!: number;
    Cad!: string;
    status!: string;
    potencia!: number;
    velocidade!: number;
    descricao!: string;
    paradas: paradas[] = [];
    horasParadasPorTipo: number[] = [];
    tiposParada: string[] = [];
    Usuario!: string;

}