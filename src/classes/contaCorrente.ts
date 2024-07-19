import { ContaBancaria } from "./contaBancaria";
import { Transacao } from "./transacao";
import { TipoTransacao } from "../enums/tipoTransacao";
import { Cliente } from "./cliente";

export class ContaCorrente extends ContaBancaria{
    private limiteChequeEspecial!: number

    constructor(saldoInicial: number, cliente: Cliente) {
        super()
        this.saldo = saldoInicial;
      }

    registrarTransacao(transacao: Transacao) {
        if(transacao.tipo == (TipoTransacao.Saque | TipoTransacao.Pagamento)){
            this.saldo = this.saldo - transacao.valor
        }  else if(transacao.tipo == (TipoTransacao.Recebimento | TipoTransacao.Deposito)){
            this.saldo = this.saldo + transacao.valor
        } else if(transacao.tipo == TipoTransacao.Transferencia){
            (contaDestino: ContaBancaria)=>{
                contaDestino.saldo = contaDestino.saldo + transacao.valor
                this.saldo = this.saldo - transacao.valor
            }
        }
    }
}