import { Injectable } from '@nestjs/common';
import { Cliente } from '../cliente/cliente.model';
import * as path from 'path';
import * as fs from 'fs'
import { ContaBancaria } from '../contaBancaria/contaBancaria.model';
import { TipoConta } from '../enums/tipoConta';
import { ContaBancariaFactory } from '../contaBancaria/contaBancaria.factory';
import { ClienteService } from '../cliente/cliente.service';

@Injectable()
export class ContasService {
    private readonly arquivoClientes = path.resolve('src/cliente/clientes.json');
    private readonly arquivoContas = path.resolve('src/contas/contas.json');
    
    constructor(
        private readonly contaBancariaFactory: ContaBancariaFactory,
        private readonly clienteService: ClienteService
    ){}

    lerContas(): ContaBancaria[]{
        const dados = fs.readFileSync(this.arquivoContas, 'utf-8')
        return JSON.parse(dados) as ContaBancaria[]
    }

    guardarContas(conta: ContaBancaria[]):void{
        fs.writeFileSync(this.arquivoContas, JSON.stringify(conta, null, 2), 'utf-8')
    }

    criarContaBancaria(tipo: TipoConta, idCliente: number, idGerente: number): Cliente{
        const novaConta = this.contaBancariaFactory.construirConta(tipo,0, idGerente, idCliente)
        return this.atualizarContaCliente(idCliente, novaConta)

    }

    atualizarContaCliente(id:number, conta: ContaBancaria): Cliente{
        const clientes = this.clienteService.lerClientes()
        
        const indiceCliente = clientes.findIndex(cliente => cliente.id === Number(id))
        
        if(clientes[indiceCliente]?.contas?.length){
            clientes[indiceCliente].contas.push(conta)
        }else{
            clientes[indiceCliente].contas = [conta]
        }

        this.clienteService.guardarClientes(clientes)
        return clientes[indiceCliente]
    }

    excluirContaBancaria(idCliente: number, tipoConta: TipoConta): Cliente {
        const clientes = this.clienteService.lerClientes();
        const indiceCliente = clientes.findIndex(cliente => cliente.id === Number(idCliente));
    
        const cliente = clientes[indiceCliente];
        if (cliente.contas) {
            cliente.contas = cliente.contas.filter(conta => conta.tipo !== tipoConta);
        }
    
        this.clienteService.guardarClientes(clientes);

        let contas = this.lerContas();
        contas = contas.filter(conta => !(conta.tipo === tipoConta && conta.idCliente === idCliente));
        this.guardarContas(contas);
    
        return cliente;
    }

    alterarTipoConta(idCliente: number, tipoContaAtual: TipoConta, novoTipoConta: TipoConta): Cliente {
        const clientes = this.clienteService.lerClientes();

        const indiceCliente = clientes.findIndex(cliente => cliente.id === Number(idCliente));

        const cliente = clientes[indiceCliente];
        const conta = cliente.contas?.find(conta => conta.tipo === tipoContaAtual);
        console.log(conta)

        conta.tipo = novoTipoConta;
        this.clienteService.guardarClientes(clientes);
        return cliente;
    }
}
