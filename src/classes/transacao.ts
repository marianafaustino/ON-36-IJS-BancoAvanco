import { TipoTransacao } from "../enums/tipoTransacao"

export class Transacao{
    id!: string
    data!: string
    valor!: number
    tipo!: TipoTransacao
}