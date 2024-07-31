import { ContaBancaria } from "../contas/contaBancaria.model";

export class ContaPoupanca extends ContaBancaria{
    private rendimentoPoupanca!: number
    
    get rendimento(): number {
        return this.saldo * 0.0001; // 0,01% do saldo
      }
}