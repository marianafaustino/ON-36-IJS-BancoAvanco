import { Endereco } from "./endereco"

export abstract class Usuario{
    private id!: string
    nome!: string
    endereco!: Endereco 
    telefone!: string
    
}