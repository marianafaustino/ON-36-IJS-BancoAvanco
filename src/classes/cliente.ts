import { ContaBancaria } from "../contaBancaria/contaBancaria.model";
import { Endereco } from "./endereco";

import { Usuario } from "./usuario";

export class Cliente extends Usuario{
    contaBancaria!: ContaBancaria[]
    //gerenteDeConta!: Gerente

    constructor(nome: string, endereco: Endereco, telefone: string){
        super()
        this.nome = nome
        this.endereco = endereco
        this.telefone = telefone
    }
}