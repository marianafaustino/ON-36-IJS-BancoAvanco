import { TipoConta } from "../enums/tipoConta"

export class ContaBancaria {
    saldo: number
    tipo: TipoConta
    idGerente: number
    idCliente: number

    constructor(tipo: TipoConta, saldo: number, idGerente: number, idCliente: number){}
}