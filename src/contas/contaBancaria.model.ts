import { TipoConta } from "../enums/tipoConta"
import { Transacao } from "../classes/transacao"
import { Gerente } from "src/gerente/gerente.model"
import { Cliente } from "src/cliente/cliente.model"

export class ContaBancaria {
    saldo: number
    tipo: TipoConta
    gerente: Gerente
    proprietario: {
        nome: string,
        id: number
    }

    constructor(tipo: TipoConta, saldo: number, gerente: Gerente, proprietario: string){}
}