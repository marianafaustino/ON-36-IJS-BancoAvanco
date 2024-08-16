import { Injectable } from '@nestjs/common';
import { Cliente } from '../../dominio/cliente/cliente.model';
import { IClientePort } from '../portas/cliente.port';
import { ContasService } from './contaBancaria.service';
import { IContaPort } from '../portas/conta.port';

@Injectable()
export class ClienteService {
    constructor(
        private readonly clientePort: IClientePort,
        private readonly contasService: ContasService,
        private readonly contaPort: IContaPort
    ) {}

    criarCliente(nome: string): Cliente {
        const clientes = this.clientePort.lerClientes();
        const novoCliente = new Cliente(nome, clientes.length > 0 ? clientes[clientes.length - 1].id + 1 : 1);
        clientes.push(novoCliente);
        this.clientePort.guardarClientes(clientes);
        return novoCliente;
    }

    buscarClientePeloId(id: number): Cliente | undefined {
        const cliente = this.clientePort.buscarClientePeloId(id);

        if (!cliente) {
            console.log(`O cliente com id ${id} não foi encontrado`);
        }

        return cliente;
    }

    excluirCliente(idCliente: number): void {
        const clientes = this.clientePort.lerClientes();
        const contas = this.contaPort.lerContas();

        const clientesAtualizados = clientes.filter(cliente => cliente.id !== idCliente);
        const contasAtualizadas = contas.filter(conta => conta.idCliente !== idCliente);

        this.clientePort.guardarClientes(clientesAtualizados);
        this.contaPort.guardarContas(contasAtualizadas);
    }
}