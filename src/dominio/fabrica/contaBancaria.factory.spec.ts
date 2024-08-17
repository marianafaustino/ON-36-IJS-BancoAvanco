import { TipoConta } from "../enums/tipoConta";
import {ContaBancariaFactory } from "./contaBancaria.factory"
import { ContaCorrente } from "./contaCorrente.model"
import { ContaPoupanca } from "./contaPoupanca.model";

describe('Testes no factory de conta bancária',()=>{
    test('Deve retornar uma conta corrente', ()=>{
        const contaFactory = new ContaBancariaFactory()
        const retornado = contaFactory.construirConta(TipoConta.ContaCorrente, 1, 1, 0)

        if(retornado instanceof ContaCorrente){
            expect(retornado.idCliente).toBe(1)
            expect(retornado.idGerente).toBe(1)
            expect(retornado.saldo).toBe(0)
            expect(retornado.limiteChequeEspecial).toBe(100)
            
        }
    })

    test('Deve retornar uma conta poupança', ()=>{
        const contaFactory = new ContaBancariaFactory()
        const retornado = contaFactory.construirConta(TipoConta.ContaPoupanca, 1, 1, 0)

        if(retornado instanceof ContaPoupanca){
            expect(retornado.idCliente).toBe(1)
            expect(retornado.idGerente).toBe(1)
            expect(retornado.saldo).toBe(0)
            expect(retornado.rendimentoPoupanca).toBe(0.0001)
            
        }
    })
})