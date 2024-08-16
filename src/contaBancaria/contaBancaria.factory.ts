import { Injectable } from "@nestjs/common";
import { TipoConta } from "../enums/tipoConta";
import { ContaBancaria } from "./contaBancaria.model";
import { ContaCorrente } from "./contaCorrente.model";
import { ContaPoupanca } from "./contaPoupanca.model";

@Injectable()
export class ContaBancariaFactory {
    construirConta(
        tipo: TipoConta, 
        idGerente: number, 
        idCliente: number, 
        saldo: number, ): ContaBancaria{
            
        switch(tipo){
            case TipoConta.ContaCorrente:
                return new ContaCorrente(tipo, saldo, idGerente, idCliente)
            case TipoConta.ContaPoupanca:
                return new ContaPoupanca(tipo, saldo, idGerente, idCliente)
            default:
                throw new Error('Tipo inválido')
        }
    }
}