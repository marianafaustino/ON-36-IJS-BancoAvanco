import { ContaBancaria } from "./contaBancaria.model";
import { TipoConta } from "src/enums/tipoConta";

export class ContaPoupanca extends ContaBancaria{
    rendimentoPoupanca: number

    constructor(t: TipoConta, s: number, idG: number, idC: number){
      super(t, s, idC, idG)
      this.tipo = t
      this.idCliente = idC
      this.idGerente = idG
      this.saldo = s
      this.rendimentoPoupanca = 0.0001
      
  }
    
    get rendimento(): number {
        return this.saldo * 0.0001; // 0,01% do saldo
      }
}