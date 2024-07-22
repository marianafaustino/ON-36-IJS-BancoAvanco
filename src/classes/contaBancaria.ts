import { TipoConta } from "../enums/tipoConta"
import { Transacao } from "./transacao"

export abstract class ContaBancaria {
    id!: string
    numeroConta!: string
    saldo!: number
    tipo!: TipoConta
    historicoTransacao?: Transacao[] 

    abstract registrarTransacao(transacao: Transacao):void
}