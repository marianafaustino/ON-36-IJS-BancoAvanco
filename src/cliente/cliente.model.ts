import { ContaBancaria } from "src/contaBancaria/contaBancaria.model"


export class Cliente {
    id: number
    contas?: ContaBancaria[]
    nome: string
    constructor(nome: string, id: number){}
}