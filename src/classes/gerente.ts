import { TipoConta } from "../enums/tipoConta";
import { Cliente } from "./cliente";
import { ContaCorrente } from "./contaCorrente";
import { ContaPoupanca } from "./contaPoupanca";
import { Usuario } from "./usuario";

export class Gerente extends Usuario{
    clientes!: Cliente[]

    abrirConta(cliente: Cliente, tipoConta: TipoConta, saldoInicial: number){
        if(tipoConta == TipoConta.ContaCorrente){
            const novaConta = new ContaCorrente(saldoInicial, cliente)
            return console.log(`A conta do tipo ${tipoConta} foi criada para o cliente.`)
        }else if(tipoConta == TipoConta.ContaPoupanca){
            const novaConta = new ContaPoupanca(saldoInicial, cliente)
            return console.log(`A conta do tipo ${tipoConta} foi criada para o cliente.`)
        }
        
    }
}