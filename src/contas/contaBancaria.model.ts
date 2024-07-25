import { TipoConta } from "../enums/tipoConta"
import { Transacao } from "../classes/transacao"
import { Gerente } from "src/gerente/gerente.model"

export class ContaBancaria {
    saldo: number
    tipo: TipoConta
    gerente: Gerente

    constructor(tipo: TipoConta, saldo: number, gerente: Gerente){}
}