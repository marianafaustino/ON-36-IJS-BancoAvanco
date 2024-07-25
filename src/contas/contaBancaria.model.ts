import { TipoConta } from "../enums/tipoConta"
import { Transacao } from "../classes/transacao"

export class ContaBancaria {
    saldo: number
    tipo: TipoConta

    constructor(tipo: TipoConta, saldo: number){}
}