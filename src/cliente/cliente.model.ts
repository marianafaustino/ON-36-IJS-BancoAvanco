import { ContaBancaria } from "src/contas/contaBancaria.model"


export class Cliente {
    id: number
    contas?: ContaBancaria[]
    nome: string
    constructor(nome: string, id: number){}
}