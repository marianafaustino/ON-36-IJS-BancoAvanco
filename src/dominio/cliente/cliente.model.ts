import { ContaBancaria } from "../conta/contaBancaria.model"


export class Cliente {
    id: number
    contas?: ContaBancaria[]
    nome: string
    constructor(nome: string, id: number){}
}