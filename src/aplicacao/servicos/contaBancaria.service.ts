import { Injectable } from '@nestjs/common';
import { Cliente } from '../../dominio/cliente/cliente.model';
import { ContaBancaria } from '../../dominio/conta/contaBancaria.model';
import { TipoConta } from '../../dominio/enums/tipoConta';
import { ContaBancariaFactory } from '../../dominio/fabrica/contaBancaria.factory';
import { IClientePort } from '../../portas/cliente.port';
import { IContaPort } from '../../portas/conta.port';

@Injectable()
export class ContasService {
    constructor(
        private readonly contaBancariaFactory: ContaBancariaFactory,
        private readonly clientePort: IClientePort,
        private readonly contaPort: IContaPort
    ) {}

    criarContaBancaria(tipo: TipoConta, idCliente: number, idGerente: number): Cliente {
        const novaConta = this.contaBancariaFactory.construirConta(tipo, 0, idGerente, idCliente);
        return this.atualizarContaCliente(idCliente, novaConta);
    }

    atualizarContaCliente(id: number, conta: ContaBancaria): Cliente {
        const clientes = this.clientePort.lerClientes();
        const indiceCliente = clientes.findIndex(cliente => cliente.id === Number(id));
        
        if (clientes[indiceCliente]?.contas?.length) {
            clientes[indiceCliente].contas.push(conta);
        } else {
            clientes[indiceCliente].contas = [conta];
        }

        this.clientePort.guardarClientes(clientes);
        return clientes[indiceCliente];
    }

    excluirContaBancaria(idCliente: number, tipoConta: TipoConta): Cliente {
        const clientes = this.clientePort.lerClientes();
        const indiceCliente = clientes.findIndex(cliente => cliente.id === Number(idCliente));
        const cliente = clientes[indiceCliente];

        if (cliente.contas) {
            cliente.contas = cliente.contas.filter(conta => conta.tipo !== tipoConta);
        }

        this.clientePort.guardarClientes(clientes);

        let contas = this.contaPort.lerContas();
        contas = contas.filter(conta => !(conta.tipo === tipoConta && conta.idCliente === idCliente));
        this.contaPort.guardarContas(contas);

        return cliente;
    }

    alterarTipoConta(idCliente: number, tipoContaAtual: TipoConta, novoTipoConta: TipoConta): Cliente {
        const clientes = this.clientePort.lerClientes();
        const indiceCliente = clientes.findIndex(cliente => cliente.id === Number(idCliente));
        const cliente = clientes[indiceCliente];
        const conta = cliente.contas?.find(conta => conta.tipo === tipoContaAtual);

        conta.tipo = novoTipoConta;
        this.clientePort.guardarClientes(clientes);
        return cliente;
    }
}
