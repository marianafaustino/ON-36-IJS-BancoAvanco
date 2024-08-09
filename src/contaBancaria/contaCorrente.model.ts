import { ContaBancaria } from "./contaBancaria.model";
import { TipoConta } from "src/enums/tipoConta";

export class ContaCorrente extends ContaBancaria{
    private limiteChequeEspecial!: number

    constructor(t: TipoConta, s: number, idG: number, idC: number){
        super(t, s, idC, idG)
        this.tipo = t
        this.idCliente = idC
        this.idGerente = idG
        this.saldo = s
        
    }
}
