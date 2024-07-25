/* import { TipoTransacao } from "../enums/tipoTransacao";
import { ContaBancaria } from "../contas/contaBancaria.model";
import { Transacao } from "./transacao";
import { Cliente } from "./cliente";

export class ContaPoupanca extends ContaBancaria{
    private rendimentoPoupanca!: number

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
            (contaBancaria: ContaBancaria)=>{
                contaBancaria.saldo = contaBancaria.saldo + transacao.valor
                this.saldo = this.saldo - transacao.valor
            }
        }
    }

    get rendimento(): number {
        return this.saldo * 0.0001; // 0,01% do saldo
      }
}
      */