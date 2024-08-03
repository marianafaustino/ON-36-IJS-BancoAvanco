import { Injectable } from '@nestjs/common';
import { Cliente } from 'src/cliente/cliente.model';
import * as path from 'path';
import * as fs from 'fs'
import { ContasService } from 'src/contaBancaria/contaBancaria.service';

@Injectable()
export class ClienteService {
    private readonly arquivoClientes = path.resolve('src/cliente/clientes.json');

    constructor(
        private readonly contasService: ContasService
    ){}

    lerClientes(): Cliente[]{
        const dados = fs.readFileSync(this.arquivoClientes, 'utf-8')
        return JSON.parse(dados) as Cliente[]
    }

    guardarClientes(cliente:Cliente[]):void{
        fs.writeFileSync(this.arquivoClientes, JSON.stringify(cliente, null, 2), 'utf-8')
    }

    criarCliente(nome: string): Cliente{
        const clientes = this.lerClientes()
        const novoCliente = {
            nome,
            id: clientes.length > 0 ? clientes[clientes.length - 1].id + 1 : 1
        }
        clientes.push(novoCliente)
        this.guardarClientes(clientes)
        return novoCliente
    }

    buscarClientePeloId(id: number): Cliente{
        const clientes = this.lerClientes()
        const cliente = clientes.find(cliente => cliente.id === Number(id))

        if(!cliente){
            console.log(`O cliente com id ${id} não foi encontrado`)
        }

        return cliente
    }

    excluirCliente(idCliente: number): void {
        const clientes = this.lerClientes();
        const contas = this.contasService.lerContas();
    
        const clientesAtualizados = clientes.filter(cliente => cliente.id !== idCliente);
    
        const contasAtualizadas = contas.filter(conta => conta.idCliente !== idCliente);
    
        this.guardarClientes(clientesAtualizados);
        this.contasService.guardarContas(contasAtualizadas);
      }
}
