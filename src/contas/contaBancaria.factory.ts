import { TipoConta } from "src/enums/tipoConta";
import { ContaBancaria } from "./contaBancaria.model";
import { ContaCorrente } from "./contaCorrente.model";
import { ContaPoupanca } from "./contaPoupanca.model";

export class ContaBancariaFactory {
    construirConta(tipo: TipoConta, idGerente: number, idCliente: number): ContaBancaria{
        switch(tipo){
            case TipoConta.ContaCorrente:
                return new ContaCorrente(tipo, 0, idGerente, idCliente)
            case TipoConta.ContaPoupanca:
                return new ContaPoupanca(tipo, 0, idGerente, idCliente)
            default:
                throw new Error('Tipo inválido')
        }
    }
}