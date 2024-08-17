import { ContaBancaria } from "../conta/contaBancaria.model";
import { TipoConta } from "src/dominio/enums/tipoConta";

export class ContaCorrente extends ContaBancaria{
    limiteChequeEspecial: number

    constructor(t: TipoConta, s: number, idG: number, idC: number){
        super(t, s, idC, idG)
        this.tipo = t
        this.idCliente = idC
        this.idGerente = idG
        this.saldo = s
        this.limiteChequeEspecial = 100
        
    }
}
